import React from "react";
import Navbar from "./Navbar";

// Changes: Added bg-black to fix the background color and made sure the image fits the container
const Hero = () => {
  return (
    <div
  id="hero"
  className=" min-h-screen bg-no-repeat bg-[url(/banner_bg.jpg)] bg-cover"
  style={{ backgroundSize: "35%", backgroundPosition: "left 100px top 100px"}} 
>

      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>

        {/* Changes: Adjusted text size and centering */}
        <div className="text-[30px] mr-32 mb-44 sm:text-[50px] sm:mr-32 lg:text-[80px] font-bold leading-tight flex justify-center items-center text-yellow-500">
          <div>
            <p data-aos="zoom-in-up">My self</p>
            <p data-aos="zoom-in-up">Muhammad</p>
            <p data-aos="zoom-in-up">kashan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;