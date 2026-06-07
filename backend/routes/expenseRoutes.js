const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
 addExpense,
 getExpenses,
 getExpense,
 updateExpense,
 deleteExpense,
 dashboard,
} = require("../controllers/expenseController");

router.get("/dashboard", auth, dashboard);

router.post("/", auth, addExpense);

router.get("/", auth, getExpenses);

router.get("/:id", auth, getExpense);

router.put("/:id", auth, updateExpense);

router.delete("/:id", auth, deleteExpense);

module.exports = router;
