import os
import pathlib
import pytest

os.environ.setdefault("DATABASE_URL", "sqlite:///./backend_test.db")

from fastapi.testclient import TestClient

from app.main import app
from app.database import Base, engine

BASE_DIR = pathlib.Path(__file__).resolve().parent.parent
TEST_DB_PATH = BASE_DIR / "backend_test.db"


@pytest.fixture(scope="session")
def client():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    with TestClient(app) as test_client:
        yield test_client
    engine.dispose()
    try:
        TEST_DB_PATH.unlink()
    except FileNotFoundError:
        pass
