from fastapi import FastAPI
from .database import engine, Base
from . import models
from .routers import opportunities

Base.metadata.create_all(bind=engine)
app = FastAPI()

app.include_router(opportunities.router)  # use routes created in opporunities.py


@app.get("/")
def home():
    return {"message": "Research Opporunity Portal Api is running"}
