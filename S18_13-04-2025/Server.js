const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello, this is first response from gfg");
});

server.listen(7979, () => {
  console.log("Server Started");
});
//http://localhost:7979
