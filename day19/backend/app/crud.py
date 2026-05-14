from typing import Optional, List
from fastapi import UploadFile
from sqlalchemy.orm import Session
from sqlalchemy import or_, desc
import csv
import os
import shutil
from io import StringIO, TextIOWrapper
from uuid import uuid4

from . import models, schemas
from .config import settings
from .utils import hash_password


def create_user(db: Session, user: schemas.UserCreate) -> models.User:
    hashed_password = hash_password(user.password)
    db_user = models.User(username=user.username, email=user.email, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_user_by_username(db: Session, username: str) -> Optional[models.User]:
    return db.query(models.User).filter(models.User.username == username).first()


def get_user_by_email(db: Session, email: str) -> Optional[models.User]:
    return db.query(models.User).filter(models.User.email == email).first()


def get_contacts(
    db: Session,
    user_id: int,
    page: int = 1,
    per_page: int = 12,
    search: Optional[str] = None,
    favorite: Optional[bool] = None,
) -> (List[models.Contact], int):
    query = db.query(models.Contact).filter(models.Contact.user_id == user_id)
    if search:
        pattern = f"%{search}%"
        query = query.filter(
            or_(
                models.Contact.full_name.ilike(pattern),
                models.Contact.email.ilike(pattern),
                models.Contact.phone.ilike(pattern),
            )
        )
    if favorite is not None:
        query = query.filter(models.Contact.is_favorite == favorite)
    total = query.count()
    items = query.order_by(desc(models.Contact.created_at)).offset((page - 1) * per_page).limit(per_page).all()
    return items, total


def get_contact(db: Session, user_id: int, contact_id: int) -> Optional[models.Contact]:
    return db.query(models.Contact).filter(models.Contact.user_id == user_id, models.Contact.id == contact_id).first()


def save_contact_image(upload_file: UploadFile) -> str:
    if not upload_file:
        return None
    os.makedirs(settings.UPLOAD_DIR, exist_ok=True)
    extension = os.path.splitext(upload_file.filename)[1]
    filename = f"{uuid4().hex}{extension}"
    file_path = os.path.join(settings.UPLOAD_DIR, filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(upload_file.file, buffer)
    return filename


def export_contacts_csv(db: Session, user_id: int) -> str:
    contacts, _ = get_contacts(db, user_id, page=1, per_page=10000)
    output = StringIO()
    writer = csv.writer(output)
    writer.writerow(["full_name", "email", "phone", "address", "company", "job_title", "notes", "is_favorite", "image", "created_at"])
    for contact in contacts:
        writer.writerow([
            contact.full_name,
            contact.email or "",
            contact.phone or "",
            contact.address or "",
            contact.company or "",
            contact.job_title or "",
            contact.notes or "",
            int(contact.is_favorite),
            contact.image or "",
            contact.created_at.isoformat(),
        ])
    return output.getvalue()


def import_contacts_from_csv(db: Session, user_id: int, upload_file: UploadFile) -> int:
    reader = csv.DictReader(TextIOWrapper(upload_file.file, encoding="utf-8", errors="replace"))
    created = 0
    for row in reader:
        if not row.get("full_name"):
            continue
        payload = schemas.ContactCreate(
            full_name=row.get("full_name", "").strip(),
            email=row.get("email", "").strip() or None,
            phone=row.get("phone", "").strip() or None,
            address=row.get("address", "").strip() or None,
            company=row.get("company", "").strip() or None,
            job_title=row.get("job_title", "").strip() or None,
            notes=row.get("notes", "").strip() or None,
            is_favorite=str(row.get("is_favorite", "0")).strip().lower() in {"1", "true", "yes", "y"},
        )
        create_contact(db, user_id, payload)
        created += 1
    return created


def create_contact(db: Session, user_id: int, contact: schemas.ContactCreate, image: Optional[UploadFile] = None) -> models.Contact:
    image_name = save_contact_image(image) if image else None
    db_contact = models.Contact(**contact.dict(), user_id=user_id, image=image_name)
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact


def update_contact(db: Session, db_contact: models.Contact, contact: schemas.ContactUpdate, image: Optional[UploadFile] = None) -> models.Contact:
    if image:
        image_name = save_contact_image(image)
        db_contact.image = image_name
    for attr, value in contact.dict(exclude_unset=True).items():
        setattr(db_contact, attr, value)
    db.commit()
    db.refresh(db_contact)
    return db_contact


def delete_contact(db: Session, db_contact: models.Contact) -> None:
    db.delete(db_contact)
    db.commit()
