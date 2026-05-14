from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, UploadFile, Form, File, Response
from sqlalchemy.orm import Session

from .. import crud, schemas, models
from ..dependencies import get_db, get_current_user

router = APIRouter(prefix="/contacts", tags=["contacts"])


@router.get("/", response_model=schemas.ContactsList)
def list_contacts(
    page: int = 1,
    per_page: int = 12,
    search: Optional[str] = None,
    favorite: Optional[bool] = None,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    items, total = crud.get_contacts(db, current_user.id, page=page, per_page=per_page, search=search, favorite=favorite)
    return {"items": items, "total": total, "page": page, "per_page": per_page}


@router.get("/export")
def export_contacts(db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    csv_payload = crud.export_contacts_csv(db, current_user.id)
    return Response(
        content=csv_payload,
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=contacts.csv"},
    )


@router.post("/import")
def import_contacts(file: UploadFile = File(...), db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    created = crud.import_contacts_from_csv(db, current_user.id, file)
    return {"detail": f"Imported {created} contacts."}


@router.get("/{contact_id}", response_model=schemas.ContactResponse)
def get_contact(contact_id: int, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    contact = crud.get_contact(db, current_user.id, contact_id)
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")
    return contact


@router.post("/", response_model=schemas.ContactResponse)
def create_contact(
    full_name: str = Form(...),
    email: Optional[str] = Form(None),
    phone: Optional[str] = Form(None),
    address: Optional[str] = Form(None),
    company: Optional[str] = Form(None),
    job_title: Optional[str] = Form(None),
    notes: Optional[str] = Form(None),
    is_favorite: Optional[bool] = Form(False),
    image: Optional[UploadFile] = None,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    payload = schemas.ContactCreate(
        full_name=full_name,
        email=email,
        phone=phone,
        address=address,
        company=company,
        job_title=job_title,
        notes=notes,
        is_favorite=is_favorite,
    )
    return crud.create_contact(db, current_user.id, payload, image)


@router.put("/{contact_id}", response_model=schemas.ContactResponse)
def update_contact(
    contact_id: int,
    full_name: Optional[str] = Form(None),
    email: Optional[str] = Form(None),
    phone: Optional[str] = Form(None),
    address: Optional[str] = Form(None),
    company: Optional[str] = Form(None),
    job_title: Optional[str] = Form(None),
    notes: Optional[str] = Form(None),
    is_favorite: Optional[bool] = Form(None),
    image: Optional[UploadFile] = None,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    contact = crud.get_contact(db, current_user.id, contact_id)
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")
    data = schemas.ContactUpdate(
        full_name=full_name,
        email=email,
        phone=phone,
        address=address,
        company=company,
        job_title=job_title,
        notes=notes,
        is_favorite=is_favorite if is_favorite is not None else contact.is_favorite,
    )
    return crud.update_contact(db, contact, data, image)


@router.delete("/{contact_id}")
def remove_contact(contact_id: int, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    contact = crud.get_contact(db, current_user.id, contact_id)
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")
    crud.delete_contact(db, contact)
    return {"detail": "Contact deleted"}
