from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return {"message": "RadioGuessr API is running"}


@app.get("/api/health")
def health_check():
    return {
        "status": "ok",
        "service": "radioguessr-backend"
    }