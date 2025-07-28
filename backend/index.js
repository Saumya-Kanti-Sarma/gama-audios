import express from "express";
import { configDotenv } from "dotenv";
import { mp3Downloader } from "./utils/downloader.util.js";

configDotenv();

const app = express();
const URI = process.env.URI;
const download = new mp3Downloader();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    status: 201,
    message: "this is gama audios"
  })
})

app.get("/download-mp3/:url", async (req, res) => {
  try {
    const url = req.params["url"];
    const newUrl = "https://youtu.be/" + url;
    const link = await download.downloadMp3(newUrl);
    res.send({
      status: 202,
      provided_url: newUrl,
      data: link
    })
  } catch (error) {
    res.send({
      status: 501,
      message: "error in calling download function",
      error: error.message
    })
  }
})

app.listen(3000, () => {
  console.log(`server running in ${URI}`);

})