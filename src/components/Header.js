import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { ImBooks } from "react-icons/im";
import { SiAboutdotme } from "react-icons/si";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div
      className={` flex max-w-6xl     md:mx-auto justify-between ml-3  ${
        !sidebar && "mr-3"
      } `}
    >
      <Link to="/">
        <div className=" md:pl-3 flex   text-[30px] font-semibold">
          <div className=" text-[50px]">📚</div>
          <div className="pt-5">መጸሃፍ</div>
        </div>
      </Link>
      <div className="hidden md:flex pt-8 md:w-[400px] lg:w-[50%]  justify-between">
        <Link to="/add">
          <div>Add product</div>
        </Link>
        <Link to="/books">
          <div>Books</div>
        </Link>
        <Link to="/about">
          <div>About me</div>
        </Link>
      </div>
      <div className="pt-8 hidden md:inline md:pr-3 ">🌙</div>

      <div className="flex md:hidden space-x-3">
        <div className="pt-8  ">🌙</div>

        <div className="pt-7">
          <BsLayoutSidebarInsetReverse
            onClick={(e) => setSidebar((cur) => !cur)}
            className=" w-8 h-8 cursor-pointer"
          />
        </div>

        {sidebar && (
          <div className=" bg-[#090a0a] h-[98vh] w-[250px] pt-7 z-10  text-white font-Helvetica  ">
            <div className="text-3xl w-[150px] mx-auto mr-5 mb-16">መጸሃፍ</div>

            <div className="w-[150px] mx-auto text-lg space-y-5">
              <Link to="/add" onClick={(e) => setSidebar(false)}>
                <div className="flex items-center space-x-3   ">
                  {" "}
                  <IoMdAddCircle /> <div>Add Books</div>
                </div>
              </Link>
              <Link to="/books" onClick={(e) => setSidebar(false)}>
                <div className="flex items-center  space-x-3 ">
                  <ImBooks /> <div>Books</div>
                </div>
              </Link>
              <Link to="/about" onClick={(e) => setSidebar(false)}>
                <div className="flex items-center  space-x-3 ">
                  {" "}
                  <SiAboutdotme /> <div>About me </div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
