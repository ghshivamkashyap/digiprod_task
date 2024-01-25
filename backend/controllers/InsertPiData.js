const PieChart = require("../models/PieChart");

exports.InsertPiData = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const result = await PieChart.insertMany(data);
    return res.status(200).json({
      iserror: false,
      message: "store created success",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};
