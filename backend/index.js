import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import { mp3Downloader } from "./utils/downloader.util.js";

configDotenv();

const app = express();
const URI = process.env.URI;
const download = new mp3Downloader();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send({
    status: 201,
    message: "this is gama audios"
  })
})

app.post("/download-mp3/", async (req, res, next) => {
  const key = req.query["key"];
  const KEY = process.env.MY_API_KEY
  if (!key || key !== KEY) {
    res.send({
      status: 401,
      message: "Invalid API key"
    })
  }
  else {
    next()
  }
}, async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      res.send({
        status: 300,
        message: "please provide a valid url to download",
      })
    }
    const link = await download.downloadMp3(data.url);
    res.send({
      status: 202,
      provided_url: data.url,
      data: link
    })
    console.log("video converted");

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