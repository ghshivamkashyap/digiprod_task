// const LineChart = require("../models/lineChartModel");

const LineChart = require("../models/LineChart");

// Controller function to fetch line chart data from MongoDB
exports.getLineChartData = async (req, res) => {
  try {
    // Fetch data from MongoDB
    const lineChartData = await LineChart.findOne().exec();

    // Check if data exists
    if (!lineChartData) {
      return res.status(404).json({
        success: false,
        message: "Line chart data not found",
      });
    }

    // Send the data as JSON response
    res.status(200).json({
      success: true,
      data: lineChartData,
    });
  } catch (error) {
    console.error("Error fetching line chart data:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.addLineChartData = async (req, res) => {
  try {
    const { labels, datasets } = req.body;

    // Validate required fields
    if (!labels || !datasets) {
      return res.status(400).json({
        success: false,
        message: "Labels and datasets are required",
      });
    }

    // Create a new LineChart instance
    const newLineChartData = new LineChart({
      labels,
      datasets,
    });

    // Save the new data to MongoDB
    await newLineChartData.save();

    // Send success response
    res.status(201).json({
      success: true,
      message: "Line chart data added successfully",
      data: newLineChartData,
    });
  } catch (error) {
    console.error("Error adding line chart data:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
