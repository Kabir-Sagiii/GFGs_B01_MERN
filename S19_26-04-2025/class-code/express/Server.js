const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

// app.get(
//   "/getuser",
//   (req, res, next) => {
//     console.log("Route-handler-1");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Route-handler-2");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Route-handler-3");
//     res.send("Working");
//   }
// );

//http://localhost:9898/getuser

app.post("/create-user", (req, res) => {
  const userdata = req.body;
  console.log(userdata);
  res.send("Working");
});
//http://localhost:9898/create-user

app.post("/newuser", (req, res) => {
  const newuser = req.body;
  fs.readFile("users.json", "utf-8", (error, data) => {
    if (error) {
      res.send({
        ok: false,
        error: "Failed to Register User",
      });
    } else {
      const usersObject = JSON.parse(data);
      usersObject.data.push(newuser);
      fs.writeFile("users.json", JSON.stringify(usersObject), (error) => {
        if (error) {
          res.send({
            ok: false,
            error: "Failed to Register User",
          });
        } else {
          res.send({
            ok: true,
            error: "User Registered",
          });
        }
      });
    }
  });
});

app.listen(9898, () => {
  console.log("Server started on 9898");
});
