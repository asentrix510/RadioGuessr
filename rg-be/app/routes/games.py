from datetime import datetime

from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.game import Game
from app.schemas.game import GameCreate, GameResponse


router = APIRouter(
    prefix="/api/games",
    tags=["Games"]
)


@router.get("/", response_model=list[GameResponse])
def get_games(db: Session = Depends(get_db)):
    games = db.query(Game).all()

    return games


@router.post(
    "/",
    response_model=GameResponse,
    status_code=status.HTTP_201_CREATED
)
def create_game(
    game_data: GameCreate,
    db: Session = Depends(get_db)
):
    game = Game(
        user_id=game_data.user_id,
        score=0,
        started_at=datetime.utcnow()
    )

    db.add(game)
    db.commit()
    db.refresh(game)

    return game