import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { ImBooks } from "react-icons/im";
import { SiAboutdotme } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";



const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className={`${theme === "dark" && "dark"}`}>
      <div className="dark:bg-[#0E1118] dark:text-slate-300">
        <div
          className={`   flex max-w-6xl md:mx-auto justify-between ml-3  ${
            !sidebar && "mr-3"
          } `}
        >
          <Link to="/">
            <div className=" md:pl-3 flex   text-[30px] font-semibold ">
              <div className=" text-[50px]">📚</div>
              <div className="pt-5">መጸሃፍ</div>
            </div>
          </Link>
          <div className="hidden md:flex pt-8 md:w-[400px] lg:w-[50%]  justify-between">
            <Link to="/add">
              <div>መጸሃፍ መዝግብ</div>
            </Link>
            <Link to="/books">
              <div>መጸሃፍት</div>
            </Link>
            <Link to="/about">
              <div>ስለኔ</div>
            </Link>
          </div>
          <div
            onClick={toggleTheme}
            className="pt-8 hidden md:inline md:pr-3 cursor-pointer "
          >
            {theme === "dark" ? "🌙" : "🌞"}
          </div>

          <div className="flex md:hidden space-x-3">
            <div onClick={toggleTheme} className="pt-8 cursor-pointer  ">
              {theme === "dark" ? "🌙" : "🌞"}
            </div>

            <div className="pt-7">
              <BsLayoutSidebarInsetReverse
                onClick={(e) => setSidebar((cur) => !cur)}
                className=" w-8 h-8 cursor-pointer"
              />
            </div>

            {sidebar && (
              <div className="  bg-[#090a0a] h-[98vh] w-[250px] pt-7 z-10  text-white font-Helvetica  ">
                <div className="text-3xl w-[150px] mx-auto mr-5 mb-16">
                  መጸሃፍ
                </div>

                <div className="w-[150px] mx-auto text-lg space-y-5">
                  <Link to="/add" onClick={(e) => setSidebar(false)}>
                    <div className="flex items-center space-x-3   ">
                      {" "}
                      <IoMdAddCircle /> <div>መጸሃፍ መዝግብ</div>
                    </div>
                  </Link>
                  <Link to="/books" onClick={(e) => setSidebar(false)}>
                    <div className="flex items-center  space-x-3 ">
                      <ImBooks /> <div>መጸሃፍት</div>
                    </div>
                  </Link>
                  <Link to="/about" onClick={(e) => setSidebar(false)}>
                    <div className="flex items-center  space-x-3 ">
                      {" "}
                      <SiAboutdotme /> <div>ስለኔ</div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="border border-white"></div>
    </div>
  );
};

export default Header;
