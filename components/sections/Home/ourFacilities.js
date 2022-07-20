import Image from "next/image";
import React from "react";
import { facilitiesdb } from "../../../db/db.local";

const Facilities = () => {
  console.log(facilitiesdb)
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto ">
        <div className="max-w-screen-5xl mx-auto ">
          <h2 className="text-3xl font-extrabold leading-9  text-gray-900">
            Our Facilities
          </h2>

          <div class=" px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
              {facilitiesdb.map((item) => (
                <div key={item.id} class="xl:w-1/3 md:w-1/2 p-4">
                  <div class=" p-6 rounded-lg">
                    <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <img
                      width={"auto"}
                      
                        src={`${item.image}`}
                        className="object-contain w-20 mx-auto p-1"
                      />
                    </div>
                    <h2 class="text-gray-900 font-bold text-2xl title-font mb-5">
                      {item.levelName}
                    </h2>
                    <p class="leading-relaxed text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
