import Image from "next/image";
import React, { useState } from "react";
import { servicedb, serviceTitle } from "../../../db/db.local";

const Service = () => {
  const [filter, setFilter] = useState("design");
  let items = servicedb.filter((item) => item.name === filter);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="md:text-3xl text-xl font-extrabold leading-9  text-gray-900 md:mb-12 mb-5">
          Our Services
        </h2>
        <div className="flex  flex-wrap -m-4 md:items-center">
          <div className="p-4 md:w-5/12  w-full">
            <div className="flex  lg:flex flex-wrap">
              {serviceTitle.map((item) => (
                <div className="w-2/6 lg:w-1/3 p-2">
                  <button
                    onClick={() => setFilter(item.name)}
                    className={`${
                      filter === item.name
                        ? "bg-orange-600 text-white w-full shadow px-3 py-5 rounded m-2"
                        : "w-full bg-white shadow px-3 py-5 rounded m-2 hover:bg-orange-600 hover:text-white"
                    }`}
                  >
                    <img
                      width={"auto"}
                      
                      className="object-contain md:w-16 w-8 mx-auto p-1"
                      src={`img/service/${item.image}`}
                      alt=""
                    />
                    <h4>{item.title}</h4>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="md:p-4 shadow  lg:flex md:w-7/12 w-full md:h-full">
            <div>
              {items.map((item) => (
                <div className="bg-white py-5 md:px-10 px-2">
                  <h4
                    className="py-3 text-2xl font-bold
                                    "
                  >
                    {item.title}
                  </h4>
                  <p className="py-3 text-md font-normal">{item.description}</p>
                  <p className="pb-3 underline">readmore...</p>
                  <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 focus:ring-orange-500  transition ease-in duration-200 text-md text-white uppercase font-medium shadow-md focus:outline-none">
                    {" "}
                    Admission Going On
                  </button>
                </div>
              ))}
            </div>

            {items.map((item) => (
              <div className="w-full overflow-hidden md:my-auto">
                <img
                  className="w-full h-full md:h-auto"
                  src={`img/service/${item.image}`}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
