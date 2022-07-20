import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { reviewdb } from "../../../db/db.local";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import SwiperCore, { Autoplay, Pagination, FreeMode } from "swiper/core";
import Image from "next/image";
SwiperCore.use([Pagination, FreeMode, Autoplay]);

const Testimonial = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold leading-9  text-gray-900 mb-12">
          Our client review
        </h2>
        <div className="flex flex-wrap justify-between">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            freeMode={true}
            autoplay={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {reviewdb.map((client) => (
              <SwiperSlide>
                <div className="w-full p-8">
                  <div className="bg-white dark:bg-gray-800 w-full rounded-lg p-4 mb-6 shadow sm:inline-block">
                    <div className="p-4 text-gray-800 rounded-lg">
                      <div className="mb-2">
                        <p className="mb-2 text-center text-gray-600 ">
                          {client.desc}
                        </p>
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-28 h-28 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                            <img
                              width={"auto"}
                              
                              src={`img/testimonials/${client.photo}`}
                              alt="img"
                              className="object-cover object-center w-full h-full"
                            />
                          </div>
                          <h5 className="font-bold text-indigo-600">
                            {client.name}
                          </h5>
                          <p className="text-sm text-gray-600">CEO / Founder</p>
                          <p className="text-sm text-gray-600 flex py-4">
                            <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                            <FaStar /> <FaStarHalfAlt />{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
