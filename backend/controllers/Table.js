const Carousal = require("../models/Carousal");
const Table = require("../models/Table");

exports.UploadTableData = async (req, res) => {
  try {
    // console.log("data - ", req.body);
    console.log("table data is - ", req.body);
    const result = await Table.create(req.body);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "some srror occured",
      error: error,
    });
  }
};


exports.GetTableData = async (req, res) => {
    try {
      // console.log("data - ", req.body);
      
      const result = await Table.find();
  
      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "some srror occured",
        error: error,
      });
    }
  };