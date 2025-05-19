const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: String,
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
