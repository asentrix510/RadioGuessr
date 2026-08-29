from fastapi import FastAPI

from app.routes.games import router as games_router


app = FastAPI(
    title="RadioGuessr API",
    version="1.0.0"
)


app.include_router(games_router)


@app.get("/")
def root():
    return {"message": "RadioGuessr API is running"}


@app.get("/api/health")
def health_check():
    return {
        "status": "ok",
        "service": "radioguessr-backend"
    }