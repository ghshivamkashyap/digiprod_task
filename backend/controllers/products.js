// const Bill = require("../models/Bill");
// const Products = require("../models/Products");
// const Stores = require("../models/Stores");

// get product using pid id
exports.getProductById = async (req, res) => {
  try {
    const pid = req.params.pid;
    console.log(pid);

    const product = await Products.findOne({ pid: pid });

    if (product) {
      return res.status(200).json({
        iserror: false,
        message: "success",
        product: product,
      });
    } else {
      return res.status(404).json({
        iserror: true,
        message: "Product not found",
        product: null,
      });
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return res.status(500).json({
      iserror: true,
      message: "Internal Server Error",
      product: null,
    });
  }
};

// add new product
// exports.addProduct = async (req, res) => {
//   try {
//     const data = req.body;

//     // Validate data against the schema
//     const product = new Products({
//       pid: data.pid,
//       name: data.name,
//       mrp: data.mrp,
//       currprice: data.currprice,
//     });

//     const validationError = product.validateSync();

//     if (validationError) {
//       console.error("Validation error:", validationError.errors);
//       return res.status(400).json({
//         iserror: true,
//         message: "Validation error",
//         errors: validationError.errors,
//       });
//     }

//     // Save the product to the database
//     await product.save();

//     return res.status(200).json({
//       iserror: false,
//       message: "Success, product added successfully",
//     });
//   } catch (error) {
//     console.error("Error adding product:", error);
//     return res.status(500).json({
//       iserror: true,
//       message: "Internal Server Error",
//       product: null,
//     });
//   }
// };

exports.addProduct = async (req, res) => {
  try {
    // const data = req.body;
    const { pid, name, mrp, currprice, store, image, lat, long } = req.body;
    console.log(req.body);

    const already = await Products.findOne({
      pid: pid,
    });

    if (already) {
      return res.status(400).json({
        iserror: true,
        message: "product already exists",
        errors: already,
      });
    }

    console.log(pid);
    console.log(name);
    console.log(pid);
    console.log(currprice);
    console.log(lat);
    console.log(long);

    // Validate data against the schema
    const product = new Products({
      pid: pid,
      name: name,
      mrp: mrp,
      currprice: currprice,
      store: store,
      image: image,
      lat: lat,
      long: long,
    });

    // return

    const validationError = product.validateSync();

    if (validationError) {
      console.error("Validation error:", validationError.errors);
      return res.status(400).json({
        iserror: true,
        message: "Validation error",
        errors: validationError.errors,
      });
    }

    // Save the product to the database
    await product.save();

    return res.status(200).json({
      iserror: false,
      message: "Success, product added successfully",
    });
  } catch (error) {
    console.error("Error adding product:", error);
    return res.status(500).json({
      iserror: true,
      message: "Internal Server Error",
      product: null,
    });
  }
};

// genrate bill from array of products

exports.genrateBiill = async (req, res) => {
  try {
    // ['122', '56', '56']
    const items = req.body.items;

    var total = 0;
    var mrp = 0;
    let productArr = [];
    let pIds = [];
    console.log(items);
    for (var i = 0; i < items.length; i++) {
      const item = await Products.findOne({ pid: items[i] });
      // console.log(item.currprice, item.mrp); // Add this line to log values
      productArr.push(item.name);
      pIds.push(item.pid);
      total = total + item.currprice;
      mrp = mrp + item.mrp;
      console.log(item);
    }
    console.log(pIds);

    const bill = new Bill({
      pIds: pIds,
      products: productArr,
      totalPrice: total,
      mrp: mrp,
    });

    await bill.save();

    if (bill) {
      return res.status(200).json({
        iserror: false,
        message: "success",
        bill: bill,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      iserror: true,
      message: "internal server error",
    });
  }
};

exports.securityCheck = async (req, res) => {
  try {
    const id = req.params.billId;
    console.log(id);
    const response = await Bill.findOne({ _id: id });
    console.log(response);

    if (response) {
      return res.status(200).json({
        iserror: false,
        message: "success",
        data: response,
      });
    } else {
      return res.status(404).json({
        iserror: true,
        message: "Product not found",
        // product: null,
      });
    }
  } catch (error) {
    console.error("Error durin security check: ", error);
    return res.status(500).json({
      iserror: true,
      message: "Internal Server Error",
      product: null,
    });
  }
};

exports.getallProducts = async (req, res) => {
  try {
    const result = await Products.find();
    return res.status(200).json({
      iserror: false,
      message: "success",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      iserror: true,
      message: "error in getting all products",
      error: error,
    });
  }
};

// exports.getSameProductsFromStores = async (req, res) => {
//   try {
//     const pid = req.params.pid;
//     console.log("i m called - ", pid);

//     const product = await Products.findOne({ pid: pid });

//     const allSameProducts = await Products.find({ name: product?.name });

//     // const allAddress = [];

//     // allSameProducts.map((x) =>
//     //   allAddress.push(Stores.findOne({ sid: x?.store }))
//     // );
//     const allAddressPromises = allSameProducts.map((x) =>
//       Stores.findOne({ sid: x?.store })
//     );

//     const allAddress = await Promise.all(allAddressPromises);

//     return res.status(200).json({
//       success: true,
//       data: allSameProducts,
//       address: allAddress,
//     });
//   } catch (error) {
//     console.error("error is - ", error);
//     return res.status(400).json({
//       success: false,
//       data: error,
//     });
//   }
// };

exports.getSameProductsFromStores = async (req, res) => {
  try {
    const pid = req.params.pid;
    console.log("I'm called - ", pid);

    const product = await Products.findOne({ pid: pid });

    const allSameProducts = await Products.find({ name: product?.name });

    const allAddressPromises = allSameProducts.map((x) =>
      Stores.findOne({ sid: x?.store })
    );

    const allAddress = await Promise.all(allAddressPromises);

    // Combine allSameProducts and allAddress object-wise
    const mergedData = allSameProducts.map((product, index) => ({
      ...product.toObject(), // Convert Mongoose document to plain JavaScript object
      address: allAddress[index], // Add the corresponding address
    }));

    return res.status(200).json({
      success: true,
      data: mergedData,
    });
  } catch (error) {
    console.error("Error is - ", error);
    return res.status(400).json({
      success: false,
      data: error,
    });
  }
};
