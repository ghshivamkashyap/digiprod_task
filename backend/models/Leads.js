const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    userId: { type: Number, required: true },
    mobileNo: { type: String, required: true },
    leadId: { type: Number, required: true, unique: true },
    stage: { type: String, required: true },
    value: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;
