import React from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const ResponsiveNav = ({ toggle, activePage, handlePageChange, setToggle }) => {
  return (
    <div
      className={`${
        toggle
          ? "bg-[#25262a] absolute h-screen w-full duration-500  top-0 left-0 ease-in-out flex text-[#e8e8e8] flex-col text-xl gap-4 items-center"
          : "bg-[#25262a] absolute h-screen w-full duration-500  top-[-110%] left-0 ease-in-out flex text-[#e8e8e8] flex-col text-xl gap-4 items-center"
      }`}
    >
      <div>
        <ul className="flex flex-col items-center">
          <li className="my-[20px] cursor-pointer hover:text-white">
            {toggle ? (
              <MdClose size={40} onClick={() => setToggle(!toggle)} />
            ) : (
              ""
            )}
          </li>
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
  );
};

export default ResponsiveNav;
