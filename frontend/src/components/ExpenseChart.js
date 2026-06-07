import React from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A020F0",
  "#FF4560",
];

const ExpenseChart = ({
  expenses,
}) => {
  const chartData = [];

  expenses
    .filter(
      (expense) =>
        expense.type ===
        "Expense"
    )
    .forEach(
      (expense) => {
        const existing =
          chartData.find(
            (item) =>
              item.name ===
              expense.category
          );

        if (existing) {
          existing.value +=
            expense.amount;
        } else {
          chartData.push({
            name:
              expense.category,
            value:
              expense.amount,
          });
        }
      }
    );

  return (
    <div className="card shadow-sm p-3 mb-4">

      <h4 className="mb-3">
        Expense by Category
      </h4>

      {chartData.length ===
      0 ? (
        <p className="text-center text-muted">
          No expense data
          available.
        </p>
      ) : (
        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <PieChart>

            <Pie
              data={
                chartData
              }
              dataKey="value"
              nameKey="name"
              outerRadius={
                100
              }
              label
            >
              {chartData.map(
                (
                  entry,
                  index
                ) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      COLORS[
                        index %
                          COLORS.length
                      ]
                    }
                  />
                )
              )}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>
        </ResponsiveContainer>
      )}

    </div>
  );
};

export default ExpenseChart;