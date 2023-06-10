import React from "react";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center">
        <div className="text-white ml-5">
          <div className="flex items-center mb-2">
            <div className="w-[20px] h-[2px] bg-[#64f4ab] mr-2"></div>
            <p className="font-bold text-lg text-[#64f4ab]">Project 1</p>
          </div>
          <div className="lg:text-[40px] text-[30px] font-bold">
            <h1>Branding Nice Studio</h1>
          </div>
          <div className="pr-12 lg:text-lg text-base font-semibold lg:my-8 my-6">
            <p>
              The technological revolution is changing aspect of our lives, and
              the fabric of society itself. it's also changing the way we learn
              and what we learn. Factual knowledge is less prized when
              everything you ever need to know can be found on your phone.
              There's no imperative to be an expert at doing everything when you
              can.
            </p>
          </div>
        </div>
        <div className="md:mt-0 mt-5">
          <img
            className="rounded-[45px]"
            src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-1-img.jpg"
            alt="Project-1"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center md:mt-[120px] mt-12">
        <div className="md:mt-0 mt-5  md:mr-10 mr-0">
          <img
            className="rounded-[45px]"
            src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-2-img.jpg"
            alt="Project-1"
          />
        </div>
        <div className="text-white ml-5 md:row-auto row-start-1">
          <div className="flex items-center mb-2">
            <div className="w-[20px] h-[2px] bg-[#64f4ab] mr-2"></div>
            <p className="font-bold text-lg text-[#64f4ab]">Project 2</p>
          </div>
          <div className="lg:text-[40px] text-[30px] font-bold">
            <h1>Mobile Card App</h1>
          </div>
          <div className="pr-12 lg:text-lg text-base font-semibold lg:my-8 my-6">
            <p>
              The technological revolution is changing aspect of our lives, and
              the fabric of society itself. it's also changing the way we learn
              and what we learn. Factual knowledge is less prized when
              everything you ever need to know can be found on your phone.
              There's no imperative to be an expert at doing everything when you
              can.
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center md:mt-[120px] mt-12">
        <div className="text-white ml-5">
          <div className="flex items-center mb-2">
            <div className="w-[20px] h-[2px] bg-[#64f4ab] mr-2"></div>
            <p className="font-bold text-lg text-[#64f4ab]">Project 3</p>
          </div>
          <div className="lg:text-[40px] text-[30px] font-bold">
            <h1>Resturant Landing page</h1>
          </div>
          <div className="pr-12 lg:text-lg text-base font-semibold lg:my-8 my-6">
            <p>
              The technological revolution is changing aspect of our lives, and
              the fabric of society itself. it's also changing the way we learn
              and what we learn. Factual knowledge is less prized when
              everything you ever need to know can be found on your phone.
              There's no imperative to be an expert at doing everything when you
              can.
            </p>
          </div>
        </div>
        <div className="md:mt-0 mt-5">
          <img
            className="rounded-[45px]"
            src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-3-img.jpg"
            alt="Project-1"
          />
        </div>
      </div>
      <div className="mt-[70px]">
        <button className="w-[150px] flex items-center justify-center h-[50px] bg-white hover:text-white hover:bg-[#25262a] hover:shadow-none border-[fcb900] duration-500 ease-in-out rounded-2xl shadow-lg shadow-gray-400 font-semibold text-[18px] text-[#25262a] cursor-pointer">
          View All
        </button>
      </div>
    </div>
  );
};

export default ProjectsSection;
