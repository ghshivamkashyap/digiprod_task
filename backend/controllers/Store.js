// const Products = require("../models/Products");
// const Stores = require("../models/Stores");

exports.addStore = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    const result = await Stores.create(data);
    return res.status(200).json({
      iserror: false,
      message: "store created success",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getStoreProducts = async (req, res) => {
  try {
    const id = req.params.sid;
    console.log("sid is - ", id);
    const result = await Products.find({
      store: id,
    });
    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log("some error - ", error);
    return res.status(400).json({
      success: false,
      error: error,
    });
  }
};
