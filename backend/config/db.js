const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shivam:WU9HkYcK5mz0v4c5@cluster0.hmn4co2.mongodb.net/",
      {
        dbName: "Digiprod",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("DB connected");
  } catch (error) {
    console.error("DB connection failed:", error.message);
    process.exit(1);
  }
};
