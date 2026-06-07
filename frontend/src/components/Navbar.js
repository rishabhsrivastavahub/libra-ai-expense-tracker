import React, {
  useContext,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  AuthContext,
} from "../context/AuthContext";

import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const {
    token,
    logout,
  } = useContext(AuthContext);

  const navigate =
    useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/"
        >
          💰 Expense Tracker
        </Link>

        <div className="ms-auto d-flex align-items-center gap-2">

          <DarkModeToggle />

          {!token ? (
            <>
              <Link
                className="btn btn-outline-light"
                to="/login"
              >
                Login
              </Link>

              <Link
                className="btn btn-success"
                to="/register"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              className="btn btn-danger"
              onClick={
                handleLogout
              }
            >
              Logout
            </button>
          )}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;