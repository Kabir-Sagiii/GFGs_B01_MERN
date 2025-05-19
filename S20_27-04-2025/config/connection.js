const { MongoClient } = require("mongodb");
const mongoclient = new MongoClient("mongodb://localhost:27017");

async function createConnection() {
  //connect with mongodb server
  await mongoclient.connect();

  //connect with database
  const dbRef = mongoclient.db("gfgdb");

  //connect with collection
  const users = dbRef.collection("users");

  return users;
}

module.exports = createConnection;
