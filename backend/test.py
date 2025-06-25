from pytubefix import YouTube
from pytubefix.cli import on_progress

url = "https://youtu.be/UtF6Jej8yb4?si=TkNDxXPVFOSu8SMy"

yt = YouTube(url, on_progress_callback=on_progress)
print(yt.title)

ys = yt.streams.get_audio_only()
ys.download()