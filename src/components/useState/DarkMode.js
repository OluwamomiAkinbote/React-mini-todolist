import React, { useEffect, useState } from "react";
import "./DarkMode.css";

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("dark-mode") === "enabled" ? true : false
  );
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("dark-mode", isDarkMode ? "enabled" : "disabled");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className="dark-mode-container">
      <h2>Dark Mode</h2>
      <label htmlFor="" className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />

        <span className="slider round"></span>
      </label>
      <span className="mode-label">
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
}

export default DarkMode;
