from datetime import datetime

from pydantic import BaseModel


class GameResponse(BaseModel):
    id: int
    user_id: int
    score: int
    started_at: datetime
    completed_at: datetime | None = None

    class Config:
        from_attributes = True