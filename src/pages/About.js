import React from "react";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`absolute top-20 bg-yellow-500 h-[90vh] w-full ${
        theme === "dark" && "dark"
      }`}
    >
      <div className="bg-white dark:bg-[#0E1118] dark:text-slate-200 h-[90vh] w-full">
        <div className=" max-w-6xl lg:flex  lg:mx-auto  text-3xl font-bold ">
          About Page
        </div>
      </div>
    </div>
  );
};

export default About;
