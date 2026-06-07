const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("MONGO_URI =", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.log("\n========== ERROR ==========");
    console.log("Name:", err.name);
    console.log("Message:", err.message);
    console.log("Code:", err.code);
    console.log("Cause:", err.cause);
    console.log(err);
    console.log("===========================\n");
    process.exit(1);
  }
};

module.exports = connectDB;