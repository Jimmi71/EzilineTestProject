import React from "react";
import { LuPackageOpen } from "react-icons/lu";

const SkillSection = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 items-center">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="bg-[#25262D] lg:w-[250px] md:w-[200px] flex flex-col items-center justify-center rounded-[30px] py-12 px-4 text-white hover:text-white hover:shadow-lg hover:shadow-green-300 hover:bg-[#64f4acad] duration-300 ease-in-out hover:border-gray-700 hover:scale-100">
          <div className="rounded-full w-[70px] h-[70px] border-[2px] flex items-center justify-center border-[#64f4ab] shadow shadow-green-800">
            <LuPackageOpen size={30} />
          </div>
          <h1 className="text-2xl font-bold my-4 text-center leading-7">
            Product Design
          </h1>
          <p className="text-center font-semibold">
            The technological revolution is changing aspect
          </p>
        </div>
        <div>
          <div className="bg-[#25262D] lg:w-[250px] md:[w-[200px] flex flex-col items-center justify-center rounded-[30px] py-12 px-4 text-white hover:text-white hover:shadow-lg hover:shadow-green-300 hover:bg-[#64f4acad] duration-300 ease-in-out hover:border-gray-700 hover:scale-100">
            <div className="rounded-full w-[70px] h-[70px] border-[2px] flex items-center justify-center border-[#64f4ab] shadow shadow-green-800">
              <LuPackageOpen size={30} />
            </div>
            <h1 className="text-2xl font-bold my-4 text-center leading-7">
              Product Design
            </h1>
            <p className="text-center font-semibold">
              The technological revolution is changing aspect
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[#25262D] lg:w-[250px] md:[w-[200px] flex flex-col items-center justify-center rounded-[30px] py-12 px-4 text-white hover:text-white hover:shadow-lg hover:shadow-green-300 hover:bg-[#64f4acad] duration-300 ease-in-out hover:border-gray-700 hover:scale-100">
            <div className="rounded-full w-[70px] h-[70px] border-[2px] flex items-center justify-center border-[#64f4ab] shadow shadow-green-800">
              <LuPackageOpen size={30} />
            </div>
            <h1 className="text-2xl font-bold my-4 text-center leading-7">
              Product Design
            </h1>
            <p className="text-center font-semibold">
              The technological revolution is changing aspect
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[#25262D] lg:w-[250px] md:[w-[200px] flex flex-col items-center justify-center rounded-[30px] py-12 px-4 text-white hover:text-white hover:shadow-lg hover:shadow-green-300 hover:bg-[#64f4acad] duration-300 ease-in-out hover:border-gray-700 hover:scale-100">
            <div className="rounded-full w-[70px] h-[70px] border-[2px] flex items-center justify-center border-[#64f4ab] shadow shadow-green-800">
              <LuPackageOpen size={30} />
            </div>
            <h1 className="text-2xl font-bold my-4 text-center leading-7">
              Product Design
            </h1>
            <p className="text-center font-semibold">
              The technological revolution is changing aspect
            </p>
          </div>
        </div>
      </div>
      <div className="text-white md:ml-20 ml-2 md:mb-0 mb-14 md:row-auto row-start-1">
        <div className="flex items-center mb-2">
          <div className="w-[20px] h-[2px] bg-[#64f4ab] mr-2"></div>
          <p className="font-bold text-lg text-[#64f4ab]">My Skills</p>
        </div>
        <div className="lg:text-[40px] text-[30px] font-bold">
          <h1>Why Hire me for next Project?</h1>
        </div>
        <div className="pr-12 lg:text-lg text-base font-semibold lg:my-8 my-6">
          <p>
            Since beginning my journey as a freelance designer nearby 7 years
            ago, I 've done remote work for agencies, consulted for startup, and
            collaborated with talented people to create digital products.
          </p>
        </div>
        <div>
          <button className="w-[150px] flex items-center justify-center h-[50px] bg-[#fcb900] hover:bg-[#fcac00] hover:shadow-none border-[fcb900] duration-500 ease-in-out rounded-2xl shadow font-semibold text-[18px] text-[#2d2e32] cursor-pointer">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
