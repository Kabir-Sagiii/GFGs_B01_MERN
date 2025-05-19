const express = require("express");
const { ObjectId } = require("mongodb");
const createConnection = require("./config/connection");
const app = express();

app.use(express.json());

app.post("/create", async (req, res) => {
  const users = await createConnection();

  //Perform insert operation
  users
    .insertOne(req.body)
    .then(() => {
      res.send({ ok: true, result: "Inserted Successfully" });
    })
    .catch((error) => {
      res.send({ ok: false, error: error });
    });
});
//http://localhost:8888/create

app.get("/read", async (req, res) => {
  const users = await createConnection();

  users
    .find()
    .toArray()
    .then((data) => {
      res.send({
        ok: true,
        length: data.length,
        result: data,
      });
    })
    .catch((error) => {
      res.send({
        ok: false,
        result: error,
      });
    });
}); //http://localhost:8888/read

// app.put("/update", (req, res) => {});

app.delete("/delete", async (req, res) => {
  const users = await createConnection();
  users
    .deleteOne({ _id: new ObjectId(req.body.id) })
    .then((data) => {
      res.send({
        ok: true,

        result: "deleted successfully",
      });
    })
    .catch((error) => {
      res.send({
        ok: false,
        result: "Failed to delete user",
      });
    });
}); //http://localhost:8888/delete

app.listen(8888, () => {
  console.log("Server Started on 8888 Port Number");
});
