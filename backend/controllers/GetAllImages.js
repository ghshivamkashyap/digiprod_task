const Carousal = require("../models/Carousal");

exports.getAllImages = async (req, res) => {
  try {
    const result = await Carousal.find();
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
