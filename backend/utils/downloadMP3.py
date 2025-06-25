from pytubefix import YouTube
import os

def DownloadAudio():
  url = "https://youtu.be/UtF6Jej8yb4?si=TkNDxXPVFOSu8SMy"
  yt = YouTube(url)
  fname = yt.title.replace(" ", "-")+".mp3"
  ys = yt.streams.get_audio_only()
  os.mkdir("sdownloads")
  ys.download(output_path="downloads", filename=fname)
  # newFile = ChangeType(f'downloads/{fname}')
  return f"downloads/{fname}"
  