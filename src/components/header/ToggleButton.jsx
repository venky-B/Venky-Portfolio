import React from "react";
import "./header.css";

const ToggleButton = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <input type="checkbox" className="toggle-btn" onClick={toggleTheme}></input>
  );
};

export default ToggleButton;
