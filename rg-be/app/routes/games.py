from datetime import datetime

from fastapi import APIRouter, Depends, status,HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.game import Game
from app.schemas.game import GameCreate, GameResponse
from app.models.round import Round
from app.schemas.game_progress import GameProgressResponse
router = APIRouter(
    prefix="/api/games",
    tags=["Games"]
)


@router.get("/", response_model=list[GameResponse])
def get_games(db: Session = Depends(get_db)):
    games = db.query(Game).all()

    return games
@router.get(
    "/{game_id}",
    response_model=GameProgressResponse
)
def get_game_progress(
    game_id: int,
    db: Session = Depends(get_db)
):
    game = (
        db.query(Game)
        .filter(Game.id == game_id)
        .first()
    )

    if game is None:
        raise HTTPException(
            status_code=404,
            detail="Game not found"
        )

    rounds_completed = (
        db.query(Round)
        .filter(
            Round.game_id == game_id,
            Round.guess_latitude.isnot(None)
        )
        .count()
    )

    status = (
        "completed"
        if game.completed_at is not None
        else "active"
    )

    return {
        "id": game.id,
        "user_id": game.user_id,
        "score": game.score,
        "rounds_completed": rounds_completed,
        "total_rounds": 5,
        "status": status,
        "started_at": game.started_at,
        "completed_at": game.completed_at
    }

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