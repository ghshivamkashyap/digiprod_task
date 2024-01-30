// models/ChartData.js
const mongoose = require("mongoose");

const tableData = new mongoose.Schema({
  // productName: { String, unique: True },
  productName: {
    type: String,
    unique: true,
  },
  color: String,
  category: String,
  price: String,
});

const Table = mongoose.model("Table", tableData);

module.exports = Table;
