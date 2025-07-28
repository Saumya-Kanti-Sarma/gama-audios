import express from "express";
import { configDotenv } from "dotenv";

configDotenv();
const app = express();
const URI = process.env.URI;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    status: 201,
    message: "this is gama audios"
  })
})

app.listen(3000, () => {
  console.log(`server running in ${URI}`);

})