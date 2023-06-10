import React from "react";
import Navbar from "./components/navbar/Navbar";
import IntroSection from "./components/IntroSection";
import SkillSection from "./components/SkillSection";
import ProjectsSection from "./components/ProjectsSection";
import ReviewSection from "./components/ReviewSection";
import WorkTogetherSection from "./components/WorkTogetherSection";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="bg-[#25262a] w-full h-4xl p-5">
        <Navbar />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <div className="bg-[#25262a] w-full">
                <IntroSection />
              </div>
              <div className="bg-[#2d2e32] w-full px-8 pb-[40px] pt-[80px]">
                <SkillSection />
              </div>
              <div className="bg-[#2d2e32] w-full px-8 pb-[40px] md:pt-[80px] pt-[40px]">
                <ProjectsSection />
              </div>
              <div className="bg-[#2d2e32] w-full px-8 pb-[40px] md:pt-[80px] pt-[40px]">
                <ReviewSection />
              </div>
              <div className="bg-[#2d2e32] w-full px-8 pb-[120px] md:pt-[80px] pt-[40px]">
                <WorkTogetherSection />
              </div>
            </React.Fragment>
          }
        />
        <Route
          path="/ProjectsSections"
          element={
            <React.Fragment>
              <div className="bg-[#2d2e32] w-full px-8 pb-[40px] md:pt-[80px] pt-[40px]">
                <ProjectsSection />
              </div>
            </React.Fragment>
          }
        />
        <Route
          path="/aboutme"
          element={
            <React.Fragment>
              <div className="bg-[#2d2e32] w-full px-8 pb-[40px] md:pt-[80px] pt-[40px]">
                <ReviewSection />
              </div>
              <div className="bg-[#2d2e32] w-full px-8 pb-[120px] md:pt-[80px] pt-[40px]">
                <WorkTogetherSection />
              </div>
            </React.Fragment>
          }
        />
      </Routes>
      <div className="bg-[#25262a] w-full p-8">
        <Footer />
      </div>
    </div>
  );
}

export default App;
