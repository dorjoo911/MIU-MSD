const express = require("express");
const dotenv = require("dotenv");

// Set the Router
const categoriesRoutes = require("./routes/categories");

// App setting load in process.env
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use("/api/v1/categories", categoriesRoutes);

app.listen(
  process.env.PORT,
  console.log(`The Express server running on PORT ${process.env.PORT} ... !`)
);
