import Image from "next/image";
import React, { useState } from "react";
import { projectdb, projectTitledb } from "../../../db/db.local";
const WorkSample = () => {
  const [filter, setFilter] = useState("all");
  let items = projectdb.filter((item) => item.name.includes(filter));
  return (
    <section className="my-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold leading-9  text-gray-900 mb-12">
          Our Latest Work
        </h2>
        <div class="md:w-1/2 w-full md:flex flex-wrap justify-center md:mx-auto">
          {projectTitledb.map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.name)}
              type="button"
              className={`${
                filter === item.name
                  ? "bg-orange-600 text-white shadow px-3 py-5 rounded m-2"
                  : " bg-white shadow px-3 py-5 rounded m-2 hover:bg-slate-600 hover:text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-5 justify-center my-10">
          {items.map((item) => (
            <div
              key={item.id}
              class="overflow-hidden shadow-lg rounded md:w-1/2 w-full lg:w-1/4 cursor-pointer"
            >
              <div class="block h-full mx-auto">
                <img
                  width={"auto"}
                  
                  alt="project"
                  src={`${item.project.projectImg}`}
                  className="max-h-72 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSample;
