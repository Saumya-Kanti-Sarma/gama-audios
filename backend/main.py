from fastapi import FastAPI
from utils.downloadMP3 import DownloadAudio
from dotenv import load_dotenv
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os

load_dotenv()
URL = os.environ.get("URL")
app = FastAPI()

origins = [
    "http://localhost.8000",
    URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.mount("/downloads", StaticFiles(directory="downloads"), name="downloads")

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/items/{item_id}")
async def read_item(item_id):
    return {"item_id": item_id}

@app.post("/download")
async def read_item():
    shutil.rmtree("downloads")
    return {"url": f"{URL}{DownloadAudio()}"}
