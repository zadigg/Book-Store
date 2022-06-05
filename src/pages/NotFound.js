import React from "react";
import { useTheme } from "../context/ThemeContext";

const NotFound = () => {
  const { theme } = useTheme();
  return <div className={` ${theme === "dark" && "dark"} `}>NotFound</div>;
};

export default NotFound;
