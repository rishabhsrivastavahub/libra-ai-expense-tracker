const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const budgetRoutes = require("./routes/budgetRoutes");

// Load environment variables
dotenv.config();

const connectDB = require("./config/db");

// 1. Initialize app FIRST
const app = express();

// 2. Global Middleware NEXT
app.use(cors());
app.use(express.json());

// 3. Routes AFTER middleware
app.get("/", (req, res) => {
  res.send("Expense Tracker API Running");
});

app.use("/api/budgets", budgetRoutes); // Moved this down here!
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/expenses", require("./routes/expenseRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // Connect to MongoDB after server starts
  connectDB();
});