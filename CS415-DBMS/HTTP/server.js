const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { headers, url, method } = req;

  // console.log(`header ===> ${headers}`);
  // console.log(`url ===> ${url}`);
  // console.log(`method ===> ${method}`);
  res.setHeader("content-type", "text/html");
  if (url === "/") {
    fs.readFile("./src/index.html", "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.write("<h1>Server may make error</h1>");
        res.end();
      } else {
        res.statusCode = 200;
        res.write(data);
        res.end();
      }
    });
    res.write("<h1>Welcome to the Mike&Tam's online movie theater...!</h1>");
    res.write(`<br><br>Click here <a href="/login"> for login</a>`);
    res.end();
  } else if (url === "/login") {
    // return login html
    res.write("<h1>To login</h1>");
    res.write(`<form action="/logincheck" method="POST">`);
    res.write(`<br><input type="text" name="email" />`);
    res.write(`<br><input type="password" name="password" />`);
    res.write(`<br><input type="submit" value="Login" />`);
    res.write(`<form/>`);
    res.end();
  } else if (url === "/logincheck" && method === "POST") {
    res.write("Login is succeesed...");
    res.end();
  } else if (url === "/home") {
    // jump in here, after login
  } else {
    res.statusCode = 404;
    res.write("<h1>404 not found hooye...!</h1>");
  }
});

server.listen(5000, () => {
  console.log("http server running on port 5000");
});
