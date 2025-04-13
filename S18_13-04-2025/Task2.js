const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const path = req.url;
  if (path === "/home") {
    fs.readFile("Home.html", "utf-8", (error, data) => {
      if (error) {
        res.end("Failed to read home page");
      } else {
        res.end(data);
      }
    });
  } else {
    fs.readFile("Server.html", "utf-8", (error, data) => {
      if (error) {
        res.end("Failed to read server page");
      } else {
        res.end(data);
      }
    });
  }
});

server.listen(8989, () => {
  console.log("server started");
});

// http://localhost:8989
