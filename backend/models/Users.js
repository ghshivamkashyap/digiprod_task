const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userId: { type: Number, required: true, unique: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
