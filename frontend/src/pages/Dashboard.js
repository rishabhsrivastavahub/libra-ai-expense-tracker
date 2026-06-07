import React, {
  useEffect,
  useState,
  useMemo,
} from "react";

import API from "../services/api";

import DashboardCards from "../components/DashboardCards";
import ExpenseChart from "../components/ExpenseChart";
import MonthlyBarChart from "../components/MonthlyBarChart";
import BudgetTracker from "../components/BudgetTracker";
import FinancialHealth from "../components/FinancialHealth";

import ExpenseForm from "../components/ExpenseForm";
import SearchFilter from "../components/SearchFilter";
import ExportPDF from "../components/ExportPDF";
import ExportCSV from "../components/ExportCSV";
import ExpenseList from "../components/ExpenseList";

const Dashboard = () => {

  const [expenses, setExpenses] =
    useState([]);

  const [
    dashboardData,
    setDashboardData,
  ] = useState({});

  const [
    editingExpense,
    setEditingExpense,
  ] = useState(null);

  const [
    searchTerm,
    setSearchTerm,
  ] = useState("");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All");

  const [
    sortBy,
    setSortBy,
  ] = useState("latest");

  const [
    startDate,
    setStartDate,
  ] = useState("");

  const [
    endDate,
    setEndDate,
  ] = useState("");

  const [
    isLoading,
    setIsLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState(null);

  const loadExpenses =
    async () => {

      setIsLoading(true);
      setError(null);

      try {

        const [
          expenseRes,
          dashboardRes,
        ] =
          await Promise.all([
            API.get(
              "/expenses"
            ),
            API.get(
              "/expenses/dashboard"
            ),
          ]);

        setExpenses(
          expenseRes.data
        );

        setDashboardData(
          dashboardRes.data
        );

      } catch (err) {

        console.log(err);

        setError(
          "Failed to load dashboard."
        );

      } finally {

        setIsLoading(
          false
        );

      }

    };

  useEffect(() => {

    loadExpenses();

  }, []);

  const filteredExpenses =
    useMemo(() => {

      return expenses

        .filter(
          (
            expense
          ) => {

            const matchesSearch =
              expense.title
                .toLowerCase()
                .includes(
                  searchTerm.toLowerCase()
                );

            const matchesCategory =
              selectedCategory ===
                "All" ||
              expense.category ===
                selectedCategory;

            const expenseDate =
              new Date(
                expense.date
              );

            const isAfterStart =
              startDate
                ? expenseDate >=
                  new Date(
                    startDate
                  )
                : true;

            const isBeforeEnd =
              endDate
                ? expenseDate <=
                  new Date(
                    endDate +
                      "T23:59:59"
                  )
                : true;

            return (
              matchesSearch &&
              matchesCategory &&
              isAfterStart &&
              isBeforeEnd
            );

          }
        )

        .sort(
          (
            a,
            b
          ) => {

            switch (
              sortBy
            ) {

              case "oldest":
                return (
                  new Date(
                    a.date
                  ) -
                  new Date(
                    b.date
                  )
                );

              case "highest":
                return (
                  b.amount -
                  a.amount
                );

              case "lowest":
                return (
                  a.amount -
                  b.amount
                );

              case "latest":

              default:
                return (
                  new Date(
                    b.date
                  ) -
                  new Date(
                    a.date
                  )
                );

            }

          }
        );

    }, [
      expenses,
      searchTerm,
      selectedCategory,
      sortBy,
      startDate,
      endDate,
    ]);

  const handleEdit =
  (
    expense
  ) => {

    setEditingExpense(
      expense
    );

    setTimeout(() => {

      document
        .getElementById(
          "expense-form"
        )
        ?.scrollIntoView({
          behavior:
            "smooth",
          block:
            "start",
        });

    }, 100);

  };
  if (
    isLoading
  ) {

    return (

      <div className="text-center p-5">

        <h4>
          Loading Dashboard...
        </h4>

      </div>

    );

  }

  if (
    error
  ) {

    return (

      <div className="alert alert-danger">

        {error}

      </div>

    );

  }

  return (

  <div>

    <h2 className="mb-4">
      Expense Dashboard
    </h2>

    <DashboardCards
      dashboardData={
        dashboardData
      }
    />

    {/* Analytics Section */}

    <div className="row">

      <div className="col-lg-6 mb-4">

        <ExpenseChart
          expenses={
            filteredExpenses
          }
        />

      </div>

      <div className="col-lg-6 mb-4">

        <MonthlyBarChart
          expenses={
            filteredExpenses
          }
        />

      </div>

    </div>

    {/* Budget + Financial Health */}

    <div className="row">

      <div className="col-lg-6 mb-4">

        <BudgetTracker
          expenses={
            filteredExpenses
          }
        />

      </div>

      <div className="col-lg-6 mb-4">

        <FinancialHealth
          expenses={
            filteredExpenses
          }
          dashboardData={
            dashboardData
          }
        />

      </div>

    </div>

    {/* Add Transaction */}

    <ExpenseForm
      loadExpenses={
        loadExpenses
      }
      editingExpense={
        editingExpense
      }
      setEditingExpense={
        setEditingExpense
      }
    />

    {/* Search & Filters */}

    <div className="card shadow-sm mb-4">

      <div className="card-body">

        <SearchFilter
          searchTerm={
            searchTerm
          }
          setSearchTerm={
            setSearchTerm
          }
          selectedCategory={
            selectedCategory
          }
          setSelectedCategory={
            setSelectedCategory
          }
          sortBy={
            sortBy
          }
          setSortBy={
            setSortBy
          }
          startDate={
            startDate
          }
          setStartDate={
            setStartDate
          }
          endDate={
            endDate
          }
          setEndDate={
            setEndDate
          }
        />

      </div>

    </div>

    {/* Expense History Header */}

    <div className="d-flex justify-content-between align-items-center mb-3">

      <h3 className="mb-0">
        Expense History
      </h3>

      <div className="d-flex gap-2">

        <ExportPDF
          expenses={
            filteredExpenses
          }
        />

        <ExportCSV
          expenses={
            filteredExpenses
          }
        />

      </div>

    </div>

    {/* Expense Table */}

    <ExpenseList
      expenses={
        filteredExpenses
      }
      loadExpenses={
        loadExpenses
      }
      onEdit={
        handleEdit
      }
    />

  </div>

);
}

export default Dashboard;