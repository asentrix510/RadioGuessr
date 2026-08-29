from datetime import datetime

from pydantic import BaseModel


class GameCreate(BaseModel):
    user_id: int


class GameResponse(BaseModel):
    id: int
    user_id: int
    score: int
    started_at: datetime
    completed_at: datetime | None = None

    class Config:
        from_attributes = True