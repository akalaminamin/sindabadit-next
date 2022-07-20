import React from "react";

const Categories = () => {
  return (
    <div className="p-3 shadow-md md:w-full h-35">
      <div className="px-4 py-5 sm:px-6 border-b w-full">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          Categories
        </h3>
      </div>
      <ul className="flex flex-col divide divide-y">
        <li className="flex flex-row">
          <div className="select-none cursor-pointer flex flex-1 items-center p-4">
            <div className="flex-1 pl-1 mr-16">
              <div className="text-gray-600 dark:text-gray-200 text-sm">
                Developer
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-200 text-xs">6</div>
          </div>
        </li>
        <li className="flex flex-row">
          <div className="select-none cursor-pointer flex flex-1 items-center p-4">
            <div className="flex-1 pl-1 mr-16">
              <div className="text-gray-600 dark:text-gray-200 text-sm">
                Charlie Moi
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-200 text-xs">5</div>
          </div>
        </li>
        <li className="flex flex-row">
          <div className="select-none cursor-pointer flex flex-1 items-center p-4">
            <div className="flex-1 pl-1 mr-16">
              <div className="text-gray-600 dark:text-gray-200 text-sm">
                Marine Jeanne
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-200 text-xs">5</div>
          </div>
        </li>
        <li className="flex flex-row">
          <div className="select-none cursor-pointer flex flex-1 items-center p-4">
            <div className="flex-1 pl-1 mr-16">
              <div className="text-gray-600 dark:text-gray-200 text-sm">
                Boby PArk
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-200 text-xs">3</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
