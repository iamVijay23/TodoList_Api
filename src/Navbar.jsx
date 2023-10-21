import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  //   Handelling the theme and toggling it in light and dark
  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

//   Adding the style to whole body 
  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "white" : "black";
  }, [theme]);

  return (
    <div className="Navbar">
      <h1 className="header">Todo list</h1>
      <button className="btn" onClick={handleTheme}>
        {theme}
      </button>
    </div>
  );
};

export default Navbar;
