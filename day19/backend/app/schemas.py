from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, EmailStr


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str] = None


class UserBase(BaseModel):
    username: str
    email: EmailStr


class UserCreate(UserBase):
    password: str


class UserResponse(UserBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True


class ContactBase(BaseModel):
    full_name: str
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    address: Optional[str] = None
    company: Optional[str] = None
    job_title: Optional[str] = None
    notes: Optional[str] = None
    is_favorite: Optional[bool] = False


class ContactCreate(ContactBase):
    pass


class ContactUpdate(ContactBase):
    pass


class ContactResponse(ContactBase):
    id: int
    user_id: int
    image: Optional[str] = None
    created_at: datetime

    class Config:
        orm_mode = True


class ContactsList(BaseModel):
    items: List[ContactResponse]
    total: int
    page: int
    per_page: int
