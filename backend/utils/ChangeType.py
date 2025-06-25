from pathlib import Path

def ChangeType(fileName):
  new_file_type = fileName.with_suffix(".mp3")
  return new_file_type