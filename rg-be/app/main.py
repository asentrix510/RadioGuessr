from fastapi import FastAPI

from app.routes.games import router as games_router
from app.routes.round import router as rounds_router
from app.routes.users import router as users_router


app = FastAPI(
    title="RadioGuessr API",
    version="1.0.0"
)

app.include_router(games_router)
app.include_router(rounds_router)
app.include_router(users_router)

@app.get("/")
def root():
    return {"message": "RadioGuessr API is running"}


@app.get("/api/health")
def health_check():
    return {
        "status": "ok",
        "service": "radioguessr-backend"
    }