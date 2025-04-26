const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/login") {
      fs.readFile("Login.html", "utf-8", (error, data) => {
        if (error) {
          res.end(
            JSON.stringify({ ok: false, error: "Failed to read file content" })
          );
        } else {
          res.end(data);
        }
      });
    } else if (req.url === "/signup") {
      fs.readFile("Signup.html", "utf-8", (error, data) => {
        if (error) {
          res.end(
            JSON.stringify({ ok: false, error: "Failed to read file content" })
          );
        } else {
          res.end(data);
        }
      });
    }
  } else if (req.method === "POST") {
    res.end("Please send Get Request Only");
  } else if (req.method === "PUT") {
  } else if (req.method === "DELETE") {
  }
});

server.listen(7979, () => {
  console.log("Server Started");
});

//http://localhost:7979
