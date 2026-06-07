import React from "react";

const DashboardCards = ({
  dashboardData,
}) => {

  const {
    totalIncome = 0,
    totalExpense = 0,
    balance = 0,

    transactionCount = 0,
    highestExpense = 0,
    averageExpense = 0,

  } = dashboardData || {};

  return (

    <>

      {/* First Row */}

      <div className="row mb-4">

        <div className="col-md-4 mb-3">

          <div className="card shadow-sm dashboard-card bg-success text-white">

            <div className="card-body text-center">

              <h6 className="mb-2">
                Total Income
              </h6>

              <h2 className="mb-0">
                ₹{totalIncome}
              </h2>

            </div>

          </div>

        </div>

        <div className="col-md-4 mb-3">

          <div className="card shadow-sm dashboard-card bg-danger text-white">

            <div className="card-body text-center">

              <h6 className="mb-2">
                Total Expense
              </h6>

              <h2 className="mb-0">
                ₹{totalExpense}
              </h2>

            </div>

          </div>

        </div>

        <div className="col-md-4 mb-3">

          <div
            className={`card shadow-sm dashboard-card text-white ${
              balance >= 0
                ? "bg-primary"
                : "bg-warning"
            }`}
          >

            <div className="card-body text-center">

              <h6 className="mb-2">
                Current Balance
              </h6>

              <h2 className="mb-0">
                ₹{balance}
              </h2>

            </div>

          </div>

        </div>

      </div>

      {/* Second Row */}

      <div className="row mb-4">

        <div className="col-md-4 mb-3">

          <div className="card shadow-sm dashboard-card h-100">

            <div className="card-body text-center d-flex flex-column justify-content-center">

              <h6 className="card-title">
                Transactions
              </h6>

              <h2 className="text-info mb-0">
                {transactionCount}
              </h2>

            </div>

          </div>

        </div>

        <div className="col-md-4 mb-3">

          <div className="card shadow-sm dashboard-card h-100">

            <div className="card-body text-center d-flex flex-column justify-content-center">

              <h6 className="card-title">
                Highest Expense
              </h6>

              <h2 className="text-danger mb-0">
                ₹{highestExpense}
              </h2>

            </div>

          </div>

        </div>

        <div className="col-md-4 mb-3">

          <div className="card shadow-sm dashboard-card h-100">

            <div className="card-body text-center d-flex flex-column justify-content-center">

              <h6 className="card-title">
                Average Expense
              </h6>

              <h2 className="text-warning mb-0">
                ₹{averageExpense}
              </h2>

            </div>

          </div>

        </div>

      </div>

    </>

  );

};

export default DashboardCards;