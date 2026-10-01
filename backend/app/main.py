from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def home():
    return {"message": "Research Opporunity Portal Api is running"}
