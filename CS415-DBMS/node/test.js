const fs = require("fs");

const request = require("request");
const { getSystemErrorMap } = require("util");

request(
  "https://nodejs.org/dist/latest-v16.x/docs/api/cluster.json",
  (err, res, body) => {
    console.log(body);
    fs.writeFileSync("./cluster.json", body);
  }
);

System.currentTimeMillis();
