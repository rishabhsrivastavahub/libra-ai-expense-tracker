const Expense = require("../models/Expense");

// Add Transaction
exports.addExpense = async (
  req,
  res
) => {
  try {
    const expense =
      await Expense.create({
        ...req.body,
        user:
          req.user.id,
      });

    res
      .status(201)
      .json(expense);

  } catch (err) {

    res
      .status(500)
      .json({
        message:
          err.message,
      });

  }
};

// Get All Transactions
exports.getExpenses =
  async (
    req,
    res
  ) => {
    try {

      const expenses =
        await Expense.find({
          user:
            req.user.id,
        }).sort({
          date: -1,
        });

      res.json(
        expenses
      );

    } catch (err) {

      res
        .status(500)
        .json({
          message:
            err.message,
        });

    }
  };

// Get Single Transaction
exports.getExpense =
  async (
    req,
    res
  ) => {
    try {

      const expense =
        await Expense.findOne(
          {
            _id:
              req.params
                .id,
            user:
              req.user
                .id,
          }
        );

      if (
        !expense
      ) {

        return res
          .status(
            404
          )
          .json({
            message:
              "Transaction not found",
          });

      }

      res.json(
        expense
      );

    } catch (err) {

      res
        .status(500)
        .json({
          message:
            err.message,
        });

    }
  };

// Update Transaction
exports.updateExpense =
  async (
    req,
    res
  ) => {
    try {

      const expense =
        await Expense.findOneAndUpdate(
          {
            _id:
              req.params
                .id,
            user:
              req.user
                .id,
          },
          req.body,
          {
            new: true,
          }
        );

      if (
        !expense
      ) {

        return res
          .status(
            404
          )
          .json({
            message:
              "Transaction not found",
          });

      }

      res.json(
        expense
      );

    } catch (err) {

      res
        .status(500)
        .json({
          message:
            err.message,
        });

    }
  };

// Delete Transaction
exports.deleteExpense =
  async (
    req,
    res
  ) => {
    try {

      const expense =
        await Expense.findOneAndDelete(
          {
            _id:
              req.params
                .id,
            user:
              req.user
                .id,
          }
        );

      if (
        !expense
      ) {

        return res
          .status(
            404
          )
          .json({
            message:
              "Transaction not found",
          });

      }

      res.json({
        message:
          "Transaction Deleted",
      });

    } catch (err) {

      res
        .status(500)
        .json({
          message:
            err.message,
        });

    }
  };

// Dashboard Statistics
exports.dashboard =
  async (
    req,
    res
  ) => {
    try {

      const expenses =
        await Expense.find({
          user:
            req.user.id,
        });

      // Income

      const totalIncome =
        expenses
          .filter(
            (
              item
            ) =>
              item.type ===
              "Income"
          )
          .reduce(
            (
              sum,
              item
            ) =>
              sum +
              item.amount,
            0
          );

      // Expense

      const totalExpense =
        expenses
          .filter(
            (
              item
            ) =>
              item.type ===
              "Expense"
          )
          .reduce(
            (
              sum,
              item
            ) =>
              sum +
              item.amount,
            0
          );

      // Balance

      const balance =
        totalIncome -
        totalExpense;

      // Total Transactions

      const transactionCount =
        expenses.length;

      // Expense Transactions

      const expenseOnly =
        expenses.filter(
          (
            item
          ) =>
            item.type ===
            "Expense"
        );

      // Highest Expense

      const highestExpense =
        expenseOnly.length >
        0
          ? Math.max(
              ...expenseOnly.map(
                (
                  item
                ) =>
                  item.amount
              )
            )
          : 0;

      // Average Expense

      const averageExpense =
        expenseOnly.length >
        0
          ? Math.round(
              totalExpense /
                expenseOnly.length
            )
          : 0;

      // Current Month Expense

      const currentMonth =
        new Date().getMonth();

      const currentYear =
        new Date().getFullYear();

      const monthlyExpenses =
        expenseOnly
          .filter(
            (
              item
            ) => {

              const d =
                new Date(
                  item.date
                );

              return (
                d.getMonth() ===
                  currentMonth &&
                d.getFullYear() ===
                  currentYear
              );

            }
          )
          .reduce(
            (
              sum,
              item
            ) =>
              sum +
              item.amount,
            0
          );

      // Final Response

      res.json({

        totalIncome,

        totalExpense,

        balance,

        transactionCount,

        highestExpense,

        averageExpense,

        monthlyExpenses,

      });

    } catch (err) {

      res
        .status(500)
        .json({
          message:
            err.message,
        });

    }
  };