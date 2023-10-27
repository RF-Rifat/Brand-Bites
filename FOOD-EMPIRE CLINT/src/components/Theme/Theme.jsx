import { useState, useEffect } from "react";
import "./DarkMode.css";
import { FiSun, FiMoon } from "react-icons/fi";

const Theme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const isDarkMode = theme === "dark"; // Change the variable name to isDarkMode

  return (
    <div className="dark_mode">
      <input
        onClick={toggleTheme}
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        checked={isDarkMode} // Check based on isDarkMode
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        {isDarkMode && ( // Show sun icon in dark mode
          <FiSun size={20} className="sun" color="yellow" />
        )}
        {!isDarkMode && ( // Show moon icon in light mode
          <FiMoon size={20} className="moon" color="gray" />
        )}
      </label>
    </div>
  );
};

export default Theme;
