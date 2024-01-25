const express = require("express");
const router = express.Router();

const { getProductById, addProduct, genrateBiill, securityCheck, getallProducts, getSameProductsFromStores } = require("../controllers/products");
const { addStore, getStoreProducts } = require("../controllers/Store");

// Use a route parameter for 'pid'
router.get("/getproductbyid/:pid", getProductById);
router.get("/security/:billId", securityCheck);
router.post("/addproduct", addProduct);
router.post("/getbill", genrateBiill);
router.post("/addstore", addStore);
router.get("/getallproducts", getallProducts);
router.get("/getstoreproducts/:sid", getStoreProducts);
router.get("/getsameproducts/:pid", getSameProductsFromStores);


module.exports = router;
