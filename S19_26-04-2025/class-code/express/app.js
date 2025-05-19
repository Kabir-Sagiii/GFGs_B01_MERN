const express = require("express");
const fs = require("fs");

const app = express();

app.get("/text", (req, res) => {
  res.send("First Reponse as a text");
});
//http://localhost:8787/text

app.get("/json", (req, res) => {
  res.send({
    ok: true,
    result: [{ name: "S1" }, { name: "S2" }, { name: "S3" }],
  });
});
//http://localhost:8787/json

app.get("/html", (req, res) => {
  res.send("<h1> This is html response </h1>");
});
//http://localhost:8787/html

app.get("/file", (req, res) => {
  fs.readFile("Home.html", "utf-8", (error, data) => {
    if (error) {
      res.send("<h1 style='color:red'> Failed to read </h1>");
    } else {
      res.send(data);
    }
  });
});

app.post("/create", (req, res) => {
  res.send({
    ok: true,
    result: "User Created",
  });
});
//http://localhost:8787/create

app.put("/update", (req, res) => {
  res.send({
    ok: true,
    result: "User Updated",
  });
});
//http://localhost:8787/update

// app.delete();

app.listen(8787, () => {
  console.log("Server Started");
});

//http://localhost:8787
