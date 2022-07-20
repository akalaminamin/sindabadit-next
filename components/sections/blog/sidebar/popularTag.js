import React from "react";

const PopularTag = () => {
  return (
    <section className="p-4 shadow-md  h-35">
      <h2 className="pb-4 text-lg  font-medium text-gray-900 dark:text-white">
        Popular Tag
      </h2>
      <div className="flex flex-wrap  items-center gap-4">
        <span className="px-4 py-2   rounded-full text-gray-600  bg-gray-200 ">
          refused
        </span>
        <span className="px-4 py-2   rounded-full text-gray-600  bg-gray-200 ">
          pending
        </span>
        <span className="px-4 py-2   rounded-full text-gray-600  bg-gray-200 ">
          accepted
        </span>
        <span className="px-4 py-2   rounded-full text-gray-600  bg-gray-200 ">
          accepted
        </span>
        <span className="px-4 py-2   rounded-full text-gray-600  bg-gray-200 ">
          accepted
        </span>
        <span className="px-4 py-2   rounded-full text-gray-600  bg-gray-200 ">
          accepted
        </span>
      </div>
    </section>
  );
};

export default PopularTag;
