from fastapi import FastAPI
from pytubefix import YouTube
from pytubefix.cli import on_progress
app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/items/{item_id}")
async def read_item(item_id):
    return {"item_id": item_id}
