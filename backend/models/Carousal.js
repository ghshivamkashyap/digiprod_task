const mongoose = require("mongoose");

const carousalSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  image: { type: String },
});

const Carousal = mongoose.model("Carousal", carousalSchema);

module.exports = Carousal;
