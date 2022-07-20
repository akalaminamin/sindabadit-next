import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { reviewdb } from "../../../db/db.local";
import { BsArrowRight } from "react-icons/bs";
import "swiper/css/navigation";
// import required modules
import SwiperCore, { Autoplay, Pagination, FreeMode } from "swiper/core";
import Link from "next/link";
import Image from "next/image"
SwiperCore.use([Pagination, FreeMode, Autoplay]);
const BlogSlider = () => {
  return (
    <section className="my-20">
      <div className="container mx-auto">
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
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            navigation={true}
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
                <div className="w-full  relative">
                  <img src={require("../../../public/assets/about.jpg")} className="ml-auto pl-14"   />
                  <div className="sm:absolute bg-slate-900 p-10 sm:left-14 bottom-0 right-0 m-1">
                    <p className="text-xl text-white">
                      Career Growth for an Image Editing Professional
                    </p>
                    <Link className="flex  items-center" href="/blog-details">
                      <a>
                        <>
                        Get Started
                        <BsArrowRight className="ml-1 font-2xl text-red-400" />
                        </>
                      </a>
                    </Link>
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

export default BlogSlider;
