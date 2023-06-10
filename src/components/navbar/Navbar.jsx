import React, { useState } from "react";
import { BsDribbble } from "react-icons/bs";
import ResponsiveNav from "./ResponsiveNav";
import { CgMenu } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activePage, setActivePage] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-10">
        <div className="cursor-pointer">
          <Link to="/" onClick={() => handlePageChange("Home")}>
            <img
              src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-[#e8e8e8] text-xl gap-x-[20px]">
            <Link
              to="/"
              className={` cursor-pointer px-4 py-2 hover:text-white hover:underline hover:underline-offset-[7px] hover:font-semibold ${
                activePage === "Home"
                  ? "underline underline-offset-[7px] font-semibold text-white"
                  : ""
              }`}
              onClick={() => handlePageChange("Home")}
            >
              Home
            </Link>
            <Link
              to="/ProjectsSections"
              className={`cursor-pointer px-4 py-2 hover:text-white hover:underline hover:underline-offset-[7px] hover:font-semibold ${
                activePage === "Portfolio"
                  ? "underline underline-offset-[7px] font-semibold text-white"
                  : ""
              }`}
              onClick={() => handlePageChange("Portfolio")}
            >
              Portfolio
            </Link>
            <Link
              to="/aboutme"
              className={`cursor-pointer px-4 py-2 hover:text-white hover:underline hover:underline-offset-[7px] hover:font-semibold ${
                activePage === "Contact"
                  ? "underline underline-offset-[7px] font-semibold text-white"
                  : ""
              }`}
              onClick={() => handlePageChange("Contact")}
            >
              About Me
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-x-6">
        <CgMenu
          className="text-white md:hidden"
          size={40}
          onClick={() => setToggle(!toggle)}
        />
        <ResponsiveNav
          toggle={toggle}
          setToggle={setToggle}
          activePage={activePage}
          handlePageChange={handlePageChange}
        />
        <div className="bg-[#2d2e32] shadow w-[50px] h-[50px] ease-in-out hover:text-[#2d2e32] duration-500 hover:bg-[#fcb900] text-[#fcac00] rounded-[10px] flex items-center justify-center cursor-pointer">
          <BsDribbble size={20} />
        </div>
        <button className="w-[150px] sm:flex hidden items-center justify-center h-[50px] bg-[#fcb900] hover:bg-[#fcac00] duration-500 ease-in-out rounded-2xl shadow font-semibold text-[18px] text-[#2d2e32] cursor-pointer">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
