import React from "react";
import Image from "next/image";
const LatestPost = () => {
  return (
    <div className="p-4 shadow-md md:w-full h-35">
      <div className="px-4 py-5 sm:px-6 border-b w-full">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          Latest Post
        </h3>
      </div>
      <ul className="flex flex-col divide divide-y">
        <li className="flex flex-row">
          <div className="select-none cursor-pointer flex flex-1 items-center p-4">
            <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  
                  
                  src={require("../../../../public/assets/about.jpg")}
                  className="mx-auto object-cover h-10 w-10 "
                />
              </a>
            </div>
            <div className="flex-1 pl-5 mr-5">
              <div className="font-medium dark:text-white">Jean Marc</div>
              <div className="text-gray-600 dark:text-gray-200 text-sm">
                10 dec 2021
              </div>
            </div>
          </div>
        </li>
        <li className="flex flex-row">
          <div className="select-none cursor-pointer flex flex-1 items-center p-4">
            <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
              <a href="#" className="block relative">
                <img
                  width={"auto"}
                  
                  alt="profil"
                  src={require("../../../../public/assets/about.jpg")}
                  className="mx-auto object-cover h-10 w-10 "
                />
              </a>
            </div>
            <div className="flex-1 pl-5 mr-5">
              <div className="font-medium dark:text-white">Designer</div>
              <div className="text-gray-600 dark:text-gray-200 text-sm">
                10 dec 2021
              </div>
            </div>
          </div>
        </li>
        <li className="flex flex-row">
          <div className="select-none cursor-pointer flex flex-1 items-center p-4">
            <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
              <a href="#" className="block relative">
                <img
                width={"auto"}
                
                  alt="profil"
                  src={require("../../../../public/assets/about.jpg")}
                  className="mx-auto object-cover h-10 w-10 "
                />
              </a>
            </div>
            <div className="flex-1 pl-5 mr-5">
              <div className="font-medium dark:text-white">CEO</div>
              <div className="text-gray-600 dark:text-gray-200 text-sm">
                10 dec 2021
              </div>
            </div>
          </div>
        </li>
        <li className="flex flex-row">
          <div className="select-none cursor-pointer flex flex-1 items-center p-4">
            <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
              <a href="#" className="block relative">
                <img
                width={"auto"}
                
                  alt="profil"
                  src={require("../../../../public/assets/about.jpg")}
                  className="mx-auto object-cover h-10 w-10 "
                />
              </a>
            </div>
            <div className="flex-1 pl-5 mr-5">
              <div className="font-medium dark:text-white">portitor</div>
              <div className="text-gray-600 dark:text-gray-200 text-sm">
                10 dec 2021
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LatestPost;
