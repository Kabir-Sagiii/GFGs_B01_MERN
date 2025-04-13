const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.writeFile("Server.html", "", (error) => {
    if (error) {
      res.end("Failed to create File");
    } else {
      res.end(`created File`);
    }
  });
});

server.listen(8989, () => {
  console.log("server started");
});

// http://localhost:8989
