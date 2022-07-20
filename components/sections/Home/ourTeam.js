import React from "react";

import { teamdb } from "../../../db/db.local";
import { BsFacebook, BsYoutube, BsLinkedin, BsTwitter } from "react-icons/bs";
import Image from "next/image";
const OurTeam = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-3xl font-extrabold leading-9  text-gray-900 mb-12">
          Our Team
        </h2>

        <div class="grid gap-4 md:grid-cols-4">
          {teamdb.map((item) => (
            <div
              key={item.id}
              className="mx-auto block h-full relative group"
              data-aos="zoom-in-down"
            >
              <img
                width={"auto"}
                
                src={`img/team/${item.photo}`}
                className="max-h-72 object-cover"
                alt=""
              />
              <div className="bg-slate-700  w-full h-20 hidden group-hover:flex items-center justify-around  absolute bottom-0 left-0 z-20">
                <a
                  className="bg-white-800 rounded-full"
                  href={item.facebookLink}
                >
                  <span className="text-4xl text-white">{BsFacebook}</span>
                </a>
                <a href={item.BsTwitter}>
                  <span className="text-3xl text-white">
                    <BsTwitter />
                  </span>
                </a>
                <a href={item.BsLinkedin}>
                  <span className="text-2xl text-white">
                    <BsLinkedin />
                  </span>
                </a>
                <a href={item.BsYoutube}>
                  <span className="text-4xl text-white">
                    <BsYoutube />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
