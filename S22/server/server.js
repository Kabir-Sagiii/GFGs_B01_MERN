const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 9898;
const UserRoute = require("./controller/users");
const ProductRoute = require("./controller/products");
const createConnection = require("./config/connection");

app.use(cors());
app.use(express.json());
app.use("/api/users", UserRoute);
app.use("/api/products", ProductRoute);

app.listen(PORT, () => {
  console.log("Server Started on 9898 Port");
  createConnection();
});
