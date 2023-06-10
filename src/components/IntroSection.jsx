import React from "react";

const IntroSection = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center pt-6">
      <div className="text-white p-8">
        <div className="flex items-center mb-2">
          <div className="w-[20px] h-[2px] bg-[#64f4ab] mr-2"></div>
          <p className="font-bold text-lg text-[#64f4ab]">Introducing</p>
        </div>
        <div className="lg:text-[80px] text-[50px] lg:leading-[90px] leading-[70px] font-bold">
          <h1>Hello</h1>
          <h1>I'm Jessy</h1>
          <h1>Walter</h1>
        </div>
        <div className="pr-12 lg:text-lg text-base font-semibold lg:my-8 my-6">
          <p>
            Since beginning my journey as a freelance designer nearby 7 years
            ago, I 've done remote work for agencies, consulted for startup, and
            collaborated with talented people to create digital products.
          </p>
        </div>
        <div>
          <button className="w-[150px] flex items-center justify-center h-[50px] bg-[#fcb900] hover:bg-[#fcac00] hover:shadow-none border-[fcb900] duration-500 ease-in-out rounded-2xl shadow-md shado shadow-[#fcac00] font-semibold text-[18px] text-[#2d2e32] cursor-pointer">
            Contact Me
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center relative md:pt-[100px] pt-[50px] lg:pr-[80px] md:pr-[50px]">
        <div className="lg:border-[70px] border-[50px] lg:w-[500px] lg:h-[500px] border-[#64f4ab] md:w-[350px] md:h-[350px] w-[300px] h-[300px]  rounded-full flex items-center justify-center">
          <img
            className="absolute lg:w-[70%] md:w-[65%] w-[75%] bottom-0"
            src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/hero-img.png"
            alt="Men"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
