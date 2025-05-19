const mongoose = require("mongoose");
function createConnection() {
  mongoose
    .connect("mongodb://localhost:27017/gfgmaydb")
    .then(() => {
      console.log("Connected to Database gfgmaydb");
    })
    .catch((error) => {
      console.log(error);
      console.log("Failed to connect with database");
    });
}

module.exports = createConnection;
