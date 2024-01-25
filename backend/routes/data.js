const express = require("express");
const { Uploadimages } = require("../controllers/Uploadimages");
const { getAllImages } = require("../controllers/GetAllImages");
const router = express.Router();

router.post("/uploadimages", Uploadimages);
router.get("/getallimages", getAllImages)

module.exports = router;
