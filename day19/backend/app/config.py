from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = "Contact Manager API"
    SECRET_KEY: str = "changeme_supersecret_key"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24
    ALGORITHM: str = "HS256"
    DATABASE_URL: str = "sqlite:///./backend.db"
    UPLOAD_DIR: str = "static/uploads"

    class Config:
        env_file = ".env"


settings = Settings()
