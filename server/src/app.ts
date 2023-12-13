import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
  return {
    data: "Hello there!",
  };
});

app.get("/test", (req, res) => {
  res.json({ data: "this is a test" });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
