from fastapi import FastAPI
import sqlite3

app = FastAPI()


@app.get("/")
def home():
    return {"message": "API is working"}
