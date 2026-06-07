import React, {
  useEffect,
  useState,
} from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] =
    useState(
      localStorage.getItem(
        "darkMode"
      ) === "true"
    );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add(
        "dark-mode"
      );
    } else {
      document.body.classList.remove(
        "dark-mode"
      );
    }

    localStorage.setItem(
      "darkMode",
      darkMode
    );
  }, [darkMode]);

  return (
    <button
      className="btn btn-outline-light"
      onClick={() =>
        setDarkMode(
          !darkMode
        )
      }
      title={
        darkMode
          ? "Switch to Light Mode"
          : "Switch to Dark Mode"
      }
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default DarkModeToggle;