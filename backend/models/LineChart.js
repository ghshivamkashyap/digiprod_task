const mongoose = require("mongoose");

const lineChartSchema = new mongoose.Schema({
  labels: [String],
  datasets: [
    {
      label: String,
      data: [Number],
      fill: Boolean,
      borderColor: String,
      tension: Number,
    },
  ],
});

const LineChart = mongoose.model("LineChart", lineChartSchema);

module.exports = LineChart;
