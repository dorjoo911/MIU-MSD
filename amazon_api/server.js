const express = require("express");
const dotenv = require("dotenv");

// App's settings load to process.env
dotenv.config({ path: "./config/config.env" });

const app = express();

app.get("/", (req, res) => {
  res.send("hello from Express...!");
});

app.listen(
  process.env.PORT,
  console.log(`Express server working on ${process.env.PORT} ...`)
);
