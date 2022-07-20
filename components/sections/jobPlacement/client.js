import Image from "next/image";
import React from "react";
import { clientdb } from "../../../db/db.local";
const Client = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-semibold text-gray-800 dark:text-white sm:text-4xl py-5">
          We are Working with
        </h2>
        <div className="bg-white shadow">
          {clientdb.map((item) => (
            <div className="grid grid-cols-4 mx-auto">
              {item.companyimage.map((photo) => (
                <div className="mx-auto">
                  <img
                    width={"auto"}
                    
                    className="p-5"
                    src={photo}
                    alt="feature_brand"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <h2 className="text-3xl text-center font-semibold text-gray-800 dark:text-white sm:text-4xl py-5">
          Looking for opportunities? Send Your CV
        </h2>
        <div className="text-center p-10">
          <button className="px-8 py-4 p-10  bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200  transition ease-in duration-200 text-md text-white uppercase font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2">
            Click here
          </button>
        </div>
      </div>
    </section>
  );
};

export default Client;
