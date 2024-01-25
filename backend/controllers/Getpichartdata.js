const Carousal = require("../models/Carousal");
const PieChart = require("../models/PieChart");

exports.Getpichartdata = async (req, res) => {
  try {
    const result = await PieChart.find();
    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log("error is - ", error);
    return res.status(500).json({
      success: false,
      error: error,
      message: "internal server error",
    });
  }
};
