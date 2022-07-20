import Image from "next/image";
import React, { useState } from "react";
import { clientdb, clientTitledb } from "../../../db/db.local";

const OurClient = () => {
  const [filter, setFilter] = useState("first");
  let items = clientdb.filter((item) => item.name === filter);
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="md:text-3xl text-lg font-extrabold leading-9  text-gray-900 mb-12">
          Our client
        </h2>
        <div className="md:w-8/12 w-full md:mx-auto">
          <div className="flex flex-wrap items-center border bg-white shadow mb-5">
            {clientTitledb.map((item) => (
              <button
                onClick={() => setFilter(item.name)}
                className="w-1/3 border-r py-4 px-3 md:font-semibold md:text-lg text-xs text-gray-800 cursor-pointer hover:bg-orange-600 hover:text-white"
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="bg-white shadow">
            {items.map((item) => (
              <div className="grid md:grid-cols-4 grid-cols-2 mx-auto">
                {item.companyimage.map((photo) => (
                  <div className="mx-auto">
                    <img className="p-5" src={photo} alt="feature_brand" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClient;
