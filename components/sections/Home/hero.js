import React from "react";
import { BsPlayCircle } from "react-icons/bs";

const Hero = () => {
  return (
    <section id="hero" className="mb-20">
      <div className="container z-20 mx-auto">
        <div className="mx-auto p-5 lg:mx-0 lg:w-1/2 w-full  text-white">
          <h2 className="text-5xl font-bold">
            Welcome to<span className="text-orange-500 ml-5">Sindabad IT</span>
          </h2>
          <p className="text-xl my-5">
            Getting ready for your prosperity,We give genuinely noticeable IT
            solutions. Sindabad IT Ltd. is a private IT service and IT support
            company with a history since 2018.
          </p>
          <div className="flex items-center">
            <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 focus:ring-orange-500  transition ease-in duration-200 text-md text-white uppercase font-medium shadow-md focus:outline-none">
              Get more
            </button>
            <button className="flex items-center ml-5 border-2 border-orange-500 px-3 py-2 text-white uppercase font-medium">
              {" "}
              <BsPlayCircle className="text-orange-500 mr-3" /> Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
