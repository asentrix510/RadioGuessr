from datetime import datetime

from pydantic import BaseModel


class GameProgressResponse(BaseModel):
    id: int
    user_id: int
    score: int

    rounds_completed: int
    total_rounds: int

    status: str

    started_at: datetime
    completed_at: datetime | None = None