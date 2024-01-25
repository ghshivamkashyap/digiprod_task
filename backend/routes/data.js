const express = require("express");
const { Uploadimages } = require("../controllers/Uploadimages");
const { getAllImages } = require("../controllers/GetAllImages");
const { InsertPiData } = require("../controllers/InsertPiData");
const { Getpichartdata } = require("../controllers/Getpichartdata");
const { addLineChartData, getLineChartData } = require("../controllers/GetLineChartData");
const router = express.Router();

router.post("/uploadimages", Uploadimages);
router.get("/getallimages", getAllImages);
router.post("/insertpidata", InsertPiData);
router.get("/getpichartdata", Getpichartdata);
router.post("/addlinechartdata", addLineChartData);
router.get("/getlinechartdata", getLineChartData);

module.exports = router;
