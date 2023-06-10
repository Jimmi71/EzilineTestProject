import React from "react";

const ReviewSection = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-2">
      <div className="bg-[#25262a] md:rounded-l-[40px] md:rounded-t-0 md:rounded-tr-none rounded-t-[40px] w-[100%]  py-24 flex flex-col items-center justify-center">
        <h1 className="text-[#64f4ab] font-bold text-7xl">56</h1>
        <h1 className="pt-3 text-xl font-semibold text-white">Happy Clients</h1>
      </div>
      <div className="bg-[#25262a] w-[100%] py-24 flex flex-col items-center justify-center">
        <h1 className="text-[#64f4ab] font-bold text-7xl">87</h1>
        <h1 className="pt-3 text-xl font-semibold text-white">Projects Done</h1>
      </div>
      <div className="bg-[#25262a] w-[100%] py-24 flex flex-col items-center justify-center">
        <h1 className="text-[#64f4ab] font-bold text-7xl">16</h1>
        <h1 className="pt-3 text-xl font-semibold text-white">
          Awards Winning
        </h1>
      </div>
      <div className="bg-[#25262a] md:rounded-r-[40px] md:rounded-bl-none rounded-b-[40px] w-[100%] py-24 flex flex-col items-center justify-center">
        <h1 className="text-[#64f4ab] font-bold text-7xl">7</h1>
        <h1 className="pt-3 text-xl font-semibold text-white">
          Years Experience
        </h1>
      </div>
    </div>
  );
};

export default ReviewSection;
