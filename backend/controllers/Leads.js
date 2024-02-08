const Carousal = require("../models/Carousal");
const Lead = require("../models/Leads");
const Table = require("../models/Table");
const User = require("../models/Users");

exports.UploadUserData = async (req, res) => {
  try {
    // console.log("data - ", req.body);
    console.log("user data is - ", req.body);
    const responce = await User.insertMany(req.body);

    return res.status(200).json({
      success: true,
      data: responce,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "some srror occured",
      error: error,
    });
  }
};

exports.UploadLeadData = async (req, res) => {
  try {
    // console.log("data - ", req.body);
    console.log("user data is - ", req.body);
    const responce = await Lead.insertMany(req.body);

    return res.status(200).json({
      success: true,
      data: responce,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "some srror occured",
      error: error,
    });
  }
};

exports.getUserData = async (req, res) => {
  try {
    console.log("uid is ---- ", req.params.userId);

    let user = await User.findOne({ userId: req.params.userId });
    const leads = await Lead.find({ userId: req.params.userId });

    let totalCount = 0;
    let totalValue = 0;
    let totalNew = 0;
    let totalContacted = 0;
    let totalQualified = 0;
    let totalNewVal = 0;
    let totalContactedVal = 0;
    let totalQualifiedVal = 0;

    leads.forEach((lead) => {
      totalCount = totalCount + 1;
      totalValue = totalValue + lead.value;
      if (lead?.stage == "New") {
        totalNew++;
        totalNewVal += lead.value;
      } else if (lead?.stage == "Contacted") {
        totalContacted++;
        totalContactedVal += lead.value;
      } else {
        totalQualified++;
        totalQualifiedVal += lead.value;
      }
    });

    const output = {
      user: {
        userId: user.userId,
        name: user.userName,
        leadCount: totalCount,
        totalValue: totalValue,
      },
      stageCounts: {
        New: totalNew,
        Contacted: totalContacted,
        Qualified: totalQualified,
      },
      stageTotalValues: {
        New: totalNewVal,
        Contacted: totalContactedVal,
        Qualified: totalQualifiedVal,
      },
    };

    return res.status(200).json({
      success: true,
      data: output,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "some srror occured",
      error: error,
    });
  }
};

exports.getAllUserData = async (req, res) => {
  try {
    // Fetch all users
    const users = await User.find();

    // Initialize output array to store data for all users
    const output = [];

    // Iterate over each user
    for (const user of users) {
      // Fetch leads associated with the current user
      const leads = await Lead.find({ userId: user.userId });

      // Initialize variables to calculate counts and total values for each stage
      let totalCount = 0;
      let totalValue = 0;
      let totalNew = 0;
      let totalContacted = 0;
      let totalQualified = 0;
      let totalNewVal = 0;
      let totalContactedVal = 0;
      let totalQualifiedVal = 0;

      // Iterate over each lead associated with the current user
      for (const lead of leads) {
        totalCount++;
        totalValue += lead.value;
        if (lead.stage === "New") {
          totalNew++;
          totalNewVal += lead.value;
        } else if (lead.stage === "Contacted") {
          totalContacted++;
          totalContactedVal += lead.value;
        } else {
          totalQualified++;
          totalQualifiedVal += lead.value;
        }
      }

      // Construct user data object
      const userData = {
        userId: user.userId,
        name: user.userName,
        leadCount: totalCount,
        totalValue: totalValue,
        stageCounts: {
          New: totalNew,
          Contacted: totalContacted,
          Qualified: totalQualified,
        },
        stageTotalValues: {
          New: totalNewVal,
          Contacted: totalContactedVal,
          Qualified: totalQualifiedVal,
        },
      };

      // Push user data object to the output array
      output.push(userData);
    }

    // Send response
    return res.status(200).json({
      success: true,
      data: output,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Some error occurred",
      error: error.message,
    });
  }
};
