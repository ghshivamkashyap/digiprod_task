const Carousal = require("../models/Carousal");

exports.Uploadimages = async (req, res) => {
  try {
    // console.log("data - ", req.body);
    console.log("req is - ", req.body);
    const result = await Carousal.create({
      name: req.body.name,
      image: req.body.image,
    });
    console.log(result);
    return res.status(200).json({
      success: true,
      data: req.body.image,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "some srror occured",
      error: error,
    });
  }
};
