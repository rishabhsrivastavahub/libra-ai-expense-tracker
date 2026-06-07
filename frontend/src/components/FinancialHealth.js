import React from "react";

const FinancialHealth = ({
  expenses,
  dashboardData,
}) => {

  const {
    totalIncome = 0,
    totalExpense = 0,
  } = dashboardData || {};

  // Savings Rate

  const savingsRate =
    totalIncome > 0
      ? Math.round(
          (
            (totalIncome -
              totalExpense) /
            totalIncome
          ) * 100
        )
      : 0;

  // Largest Spending Category

  const categoryTotals = {};

  expenses
    .filter(
      (item) =>
        item.type ===
        "Expense"
    )
    .forEach((item) => {

      categoryTotals[
        item.category
      ] =
        (
          categoryTotals[
            item.category
          ] || 0
        ) +
        item.amount;

    });

  let largestCategory =
    "-";

  let max = 0;

  Object.keys(
    categoryTotals
  ).forEach(
    (category) => {

      if (
        categoryTotals[
          category
        ] > max
      ) {

        max =
          categoryTotals[
            category
          ];

        largestCategory =
          category;

      }

    }
  );

  // Financial Status

  let status =
    "Needs Attention";

  let statusColor =
    "bg-dark";

  if (
    savingsRate >= 50
  ) {

    status =
      "Healthy";

    statusColor =
      "bg-success";

  } else if (
    savingsRate >= 20
  ) {

    status =
      "Average";

    statusColor =
      "bg-warning";

  }

  return (

    <div className="card shadow-sm mb-4">

      <div className="card-body">

        <h4 className="mb-4 fw-bold">
          Financial Health
        </h4>

        <div className="row g-3">

          {/* Savings Rate */}

          <div className="col-md-6">

            <div className="card bg-primary text-white border-0 h-100 fin-health-card">

              <div className="card-body text-center d-flex flex-column justify-content-center">

                <div className="fs-3">
                  💰
                </div>

                <h6 className="mt-2">
                  Savings Rate
                </h6>

                <h2>
                  {savingsRate}%
                </h2>

              </div>

            </div>

          </div>

          {/* Largest Category */}

          <div className="col-md-6">

            <div className="card bg-info text-white border-0 h-100 fin-health-card">

              <div className="card-body text-center d-flex flex-column justify-content-center">

                <div className="fs-3">
                  📊
                </div>

                <h6 className="mt-2">
                  Largest Category
                </h6>

                <h3>
                  {largestCategory}
                </h3>

              </div>

            </div>

          </div>

          {/* Total Spent */}

          <div className="col-md-6">

            <div className="card bg-danger text-white border-0 h-100 fin-health-card">

              <div className="card-body text-center d-flex flex-column justify-content-center">

                <div className="fs-3">
                  💸
                </div>

                <h6 className="mt-2">
                  Total Spent
                </h6>

                <h3>
                  ₹{totalExpense}
                </h3>

              </div>

            </div>

          </div>

          {/* Status */}

          <div className="col-md-6">

            <div
              className={`card text-white border-0 h-100 fin-health-card ${statusColor}`}
            >

              <div className="card-body text-center d-flex flex-column justify-content-center">

                <div className="fs-3">
                  🏆
                </div>

                <h6 className="mt-2">
                  Status
                </h6>

                <h3>
                  {status}
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default FinancialHealth;