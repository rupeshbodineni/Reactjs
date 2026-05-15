from app import crud, models
from app.database import SessionLocal, engine
import bcrypt

# Ensure DB tables exist
models.Base.metadata.create_all(bind=engine)

session = SessionLocal()
try:
    user = session.query(models.User).filter(models.User.username == 'tester').first()
    if not user:
        hashed = bcrypt.hashpw(b'secret123', bcrypt.gensalt()).decode()
        user = models.User(username='tester', email='tester@example.com', hashed_password=hashed)
        session.add(user)
        session.commit()
        session.refresh(user)
    created = crud.seed_contacts(session, user.id, count=50)
    print(f'Seeded {created} contacts for user tester (id={user.id}).')
finally:
    session.close()
