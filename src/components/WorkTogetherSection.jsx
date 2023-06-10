import React from "react";

const WorkTogetherSection = () => {
  return (
    <div className="text-white md:py-16 py-24 md:px-[200px] px-[50px] rounded-[50px] flex flex-col items-center justify-center md:mb-0 mb-14 md:row-auto row-start-1 bg-[#25262a] relative">
      <div className="bg-[#64f4ab] md:w-[150px] md:h-[150px] w-[90px] h-[90px] absolute top-0 left-0 rounded-br-full rounded-tl-[210rem]"></div>
      <div className="flex items-center mb-2">
        <div className="w-[70px] h-[2px] bg-[#64f4ab] mr-2"></div>
      </div>
      <div className="lg:text-[40px] text-[30px] font-bold">
        <h1>Lets Work Together</h1>
      </div>
      <div className="lg:text-lg text-base font-semibold lg:my-8 my-6 text-center">
        <p>
          The technological revolution is changing aspect of our lives, and the
          fabric of society itself. it's also changing the way we learn and what
          we learn
        </p>
      </div>
      <div>
        <button className="w-[150px] flex items-center justify-center h-[50px] bg-[#fcb900] hover:bg-[#fcac00] hover:shadow-none border-[fcb900] duration-500 ease-in-out rounded-2xl shadow font-semibold text-[18px] text-[#2d2e32] cursor-pointer">
          Contact Me
        </button>
      </div>
      <div className="border-[#64f4ab] border-[40px] md:w-[150px] md:h-[150px] w-[90px] h-[90px] right-0 bottom-0 rounded-tl-full border-b-0 border-r-0 absolute"></div>
    </div>
  );
};

export default WorkTogetherSection;
