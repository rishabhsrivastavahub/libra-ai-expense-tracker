// import React,
// {
// useEffect,
// useState,
// } from "react";

// import API
// from "../services/api";

// const BudgetTracker =
// ({
// expenses,
// }) => {

// const [
// budgets,
// setBudgets,
// ] =
// useState([]);

// useEffect(
// () => {
// loadBudgets();
// },
// []
// );

// const loadBudgets =
// async () => {

// const res =
// await API.get(
// "/budgets"
// );

// setBudgets(
// res.data
// );

// };

// return (

// <div className="card shadow-sm mb-4">

// <div className="card-body">

// <h4 className="mb-4">

// Budget Goals

// </h4>

// {budgets.map(
// (
// budget
// ) => {

// const spent =
// expenses
// .filter(
// (
// item
// ) =>
// item.type ===
// "Expense" &&
// item.category ===
// budget.category
// )
// .reduce(
// (
// sum,
// item
// ) =>
// sum +
// item.amount,
// 0
// );

// const percent =
// Math.min(
// (
// spent /
// budget.limit
// ) *
// 100,
// 100
// );

// return (

// <div
// key={
// budget._id
// }
// className="mb-4"
// >

// <div className="d-flex justify-content-between">

// <strong>

// {
// budget.category
// }

// </strong>

// <span>

// ₹
// {
// spent
// }

// /

// ₹
// {
// budget.limit
// }

// </span>

// </div>

// <div className="progress mt-2">

// <div

// className={`progress-bar ${
// percent >=
// 100
// ? "bg-danger"
// : percent >=
// 80
// ? "bg-warning"
// : "bg-success"
// }`}

// style={{
// width:
// `${percent}%`,
// }}

// >

// {
// Math.round(
// percent
// )
// }
// %

// </div>

// </div>

// </div>

// );

// }
// )}

// </div>

// </div>

// );

// };

// export default
// BudgetTracker;

import React, {
  useEffect,
  useState,
} from "react";

const defaultBudgets = [
  {
    category: "Food",
    limit: 10000,
  },
  {
    category: "Travel",
    limit: 15000,
  },
  {
    category: "Shopping",
    limit: 25000,
  },
  {
    category: "Bills",
    limit: 10000,
  },
  {
    category: "Medical",
    limit: 5000,
  },
  {
    category: "Entertainment",
    limit: 5000,
  },
];

const BudgetTracker = ({
  expenses,
}) => {

  const [budgets,
    setBudgets] =
    useState([]);

  useEffect(() => {

    const saved =
      localStorage.getItem(
        "budgets"
      );

    if (saved) {

      setBudgets(
        JSON.parse(
          saved
        )
      );

    } else {

      localStorage.setItem(
        "budgets",
        JSON.stringify(
          defaultBudgets
        )
      );

      setBudgets(
        defaultBudgets
      );

    }

  }, []);

  const editBudget =
    (index) => {

      const amount =
        prompt(
          `Enter budget for ${budgets[index].category}`,
          budgets[index].limit
        );

      if (
        !amount ||
        isNaN(
          amount
        )
      )
        return;

      const updated =
        [...budgets];

      updated[
        index
      ].limit =
        Number(
          amount
        );

      setBudgets(
        updated
      );

      localStorage.setItem(
        "budgets",
        JSON.stringify(
          updated
        )
      );

    };

  return (

    <div className="card shadow-sm mb-4">

      <div className="card-body">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h4 className="mb-0">
            Budget Goals
          </h4>

          <small className="text-muted">
            Click budget to edit
          </small>

        </div>

        {budgets.map(
          (
            budget,
            index
          ) => {

            const spent =
              expenses
                .filter(
                  (
                    item
                  ) =>
                    item.type ===
                      "Expense" &&
                    item.category ===
                      budget.category
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

            const percent =
              Math.min(
                (
                  spent /
                  budget.limit
                ) *
                  100,
                100
              );

            return (

              <div
                key={
                  budget.category
                }
                className="mb-4"
              >

                <div
                  className="d-flex justify-content-between align-items-center mb-2"
                  style={{
                    cursor:
                      "pointer",
                  }}
                  onClick={() =>
                    editBudget(
                      index
                    )
                  }
                >

                  <strong>
                    {
                      budget.category
                    }
                  </strong>

                  <span>

                    ₹
                    {
                      spent
                    }

                    {" / "}

                    ₹
                    {
                      budget.limit
                    }

                  </span>

                </div>

                <div className="progress">

                  <div

                    className={`progress-bar ${
                      percent >=
                      100
                        ? "bg-danger"
                        : percent >=
                          80
                        ? "bg-warning"
                        : "bg-success"
                    }`}

                    style={{
                      width:
                        `${percent}%`,
                    }}

                  >

                    {
                      Math.round(
                        percent
                      )
                    }

                    %

                  </div>

                </div>

              </div>

            );

          }
        )}

      </div>

    </div>

  );

};

export default BudgetTracker;