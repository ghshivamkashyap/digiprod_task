// models/ChartData.js
const mongoose = require("mongoose");

const chartDataSchema = new mongoose.Schema({
  labels: [String],
  datasets: [
    {
      label: String,
      data: [Number],
      backgroundColor: [String],
      borderColor: [String],
      borderWidth: Number,
    },
  ],
});

const PieChart = mongoose.model("ChartData", chartDataSchema);

module.exports = PieChart;
