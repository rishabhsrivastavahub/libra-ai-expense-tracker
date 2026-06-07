const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
const mongoose = require("mongoose");

const uri = "mongodb+srv://expenseadmin:59mh_CqvTNBzQN_@cluster0.nqmwe14.mongodb.net/expenseTracker?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ MongoDB Connected");
    process.exit(0);
  })
  .catch((err) => {
    console.log("❌ ERROR:");
    console.log(err);
    process.exit(1);
  });