import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MonthlyBarChart = ({
  expenses,
}) => {

  const monthlyData = {};

  expenses.forEach(
    (expense) => {

      const month =
        new Date(
          expense.date
        ).toLocaleString(
          "default",
          {
            month: "short",
          }
        );

      monthlyData[
        month
      ] =
        (monthlyData[
          month
        ] || 0) +
        expense.amount;
    }
  );

  const data =
    Object.keys(
      monthlyData
    ).map(
      (month) => ({
        month,
        amount:
          monthlyData[
            month
          ],
      })
    );

  return (
    <div className="card p-3 mb-4">

      <h4>
        Monthly Expenses
      </h4>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart
          data={data}
        >
          <XAxis
            dataKey="month"
          />

          <YAxis />

          <Tooltip />

          {/* <Bar
            dataKey="amount"
            fill="#0d6efd"
          /> */}

          <Bar
  dataKey="amount"
  radius={[
    6,
    6,
    0,
    0,
  ]}
  fill="#0d6efd"
/>
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default MonthlyBarChart;