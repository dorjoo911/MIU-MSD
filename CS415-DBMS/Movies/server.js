const express = require("express");
// dotenv points config's path and saves data in 'process variable' that env path
const dotenv = require("dotenv");

// inside dotenv has config it takes path ... starting current folder=='./' + '/config/path'
// like this way application's settings will run into process.env
dotenv.config({ path: "./config/congig.env" });

const app = express();

const server = app.listen(
  // server res saved in server variable later I will use in case
  process.env.PORT, // process.env has PORT setting in config folder
  console.log(`hello express server running on PORT:${process.env.PORT} ...!`)
);

// POST requires raw json in body
app.use(express.json());

const MongoConnectionClient = require("mongodb").MongoClient;

MongoConnectionClient.connect("mongodb://localhost:27017")
  .then((client) => {
    console.log("Connected to the MongoDB");
    app.post("/user", (req, res) => {
      console.log(req);
      res.send("saving user info");
      client
        .db("CinemaDB")
        .collection("user")
        .insertOne(req.body)
        .then((res) => {
          res.send("Successfully saved");
        })
        .catch((err) => {
          console.log("couldn't save user info");
        });
    });

    app.get("/user", (req, res) => {
      client
        .db("CinemaDB")
        .collection("user")
        .find()
        .toArray()
        .then((user) => {
          res.send(user);
        });
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("Not connected to the MongoDB");
  });

// Unhandled Error !!!
process.on("unhandledRejection", (err, promise) => {
  console.log(`Oops un-handled ERROR: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});

// // later, I'll set Routes each collection like that
// const userRoutes = require("./routes/userCRUD");
// app.use("/api/v1/user", userRoutes);
