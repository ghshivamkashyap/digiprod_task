const express = require("express");
const { Uploadimages } = require("../controllers/Uploadimages");
const { getAllImages } = require("../controllers/GetAllImages");
const { InsertPiData } = require("../controllers/InsertPiData");
const { Getpichartdata } = require("../controllers/Getpichartdata");
const {
  addLineChartData,
  getLineChartData,
} = require("../controllers/GetLineChartData");
const { UploadTableData, GetTableData } = require("../controllers/Table");
const { UploadUserData, UploadLeadData, getUserData, getAllUserData } = require("../controllers/Leads");
const router = express.Router();

router.post("/uploadimages", Uploadimages);
router.get("/getallimages", getAllImages);
router.post("/insertpidata", InsertPiData);
router.get("/getpichartdata", Getpichartdata);
router.post("/addlinechartdata", addLineChartData);
router.get("/getlinechartdata", getLineChartData);
router.post("/uploadtabledata", UploadTableData);
router.get("/gettabledata", GetTableData);


// digi work 
router.post("/uploaduserdata", UploadUserData);
router.post("/uploadleaddata", UploadLeadData);
router.get("/getuserdata/:userId", getUserData);
router.get("/getalluserdata", getAllUserData);

module.exports = router;
