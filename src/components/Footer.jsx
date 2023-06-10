import React from "react";
import { BsDribbble } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between  items-center">
      <div className="cursor-pointer">
        <img
          src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg"
          alt="Logo"
        />
      </div>
      <div className="lg:text-lg text-base font-semibold text-center text-white px-10 md:py-0 py-6">
        <p>
          © 2023 Freelancer - Phlox Elementor WordPress Theme. All rights
          reserved.
        </p>
      </div>
      <div className="flex items-center justify-center md:gap-x-7 gap-x-5">
        <div className="bg-[#2d2e32] shadow w-[50px] h-[50px] ease-in-out hover:text-[#2d2e32] duration-500 hover:bg-[#fcb900] text-[#fcac00] rounded-[10px] flex items-center justify-center cursor-pointer">
          <BsDribbble size={20} />
        </div>
        <div className="bg-[#2d2e32] shadow w-[50px] h-[50px] ease-in-out hover:text-[#2d2e32] duration-500 hover:bg-[#fcb900] text-[#fcac00] rounded-[10px] flex items-center justify-center cursor-pointer">
          <BsDribbble size={20} />
        </div>
        <div className="bg-[#2d2e32] shadow w-[50px] h-[50px] ease-in-out hover:text-[#2d2e32] duration-500 hover:bg-[#fcb900] text-[#fcac00] rounded-[10px] flex items-center justify-center cursor-pointer">
          <BsDribbble size={20} />
        </div>
        <div className="bg-[#2d2e32] shadow w-[50px] h-[50px] ease-in-out hover:text-[#2d2e32] duration-500 hover:bg-[#fcb900] text-[#fcac00] rounded-[10px] flex items-center justify-center cursor-pointer">
          <BsDribbble size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
