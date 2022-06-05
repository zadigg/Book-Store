import React from "react";
import { useTheme } from "../context/ThemeContext";

import homeImage from "../images/homeImage.svg";

const Home = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`absolute top-20 bg-yellow-500 h-[90vh] w-full ${
        theme === "dark" && "dark"
      }`}
    >
      <div className="bg-white dark:bg-[#0E1118] dark:text-slate-200 h-[90vh] w-full pt-[5%] px-0 mx-0">
        <div className=" max-w-6xl lg:flex  lg:mx-auto  text-3xl font-bold   ">
          <div className="relative px-3 text-6xl sm:text-7xl md:text-8xl lg:text-6xl  xl:text-7xl 2xl:text-7xl w-full lg:w-1/2   ">
            የመጸሃፍ <span className="block">ጥርቅምህን እዚ ላይ አስቀምጥ</span>{" "}
            <div>
              <div className="absolute w-8 h-8 animate-bounce bg-green-500 rounded-full top-[12%] lg:top-[5%] left-[38%] text-xl" />
              <div className="absolute top-[12%] left-[42%] lg:top-[5%] xl:left-[42%]">
                <div className="absolute w-8 h-8 animate-pulse bg-yellow-500 rounded-full top-[12%] left-[20px] text-xl" />
                <div className="absolute w-8 h-8 animate-bounce bg-red-500 rounded-full top-[12%] left-[60px] text-xl" />
              </div>
            </div>
          </div>
          <div className="flex lg:w-1/2 ">
            <img
              src={homeImage}
              alt="Home"
              className="hidden lg:inline-block  dark:opacity-60 mt-2 w-[600px] h-[416px] object-contain   xl:-mt-10 xl:rounded-3xl mx-auto  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
