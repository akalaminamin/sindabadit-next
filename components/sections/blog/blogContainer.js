import React from 'react';
import { BsCalendarDate } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import  Link from 'next/link';
import { BlogData } from '../../../db/db.local';
import Image from 'next/image';
const BlogContainer = () => {
  return (

    <section className="p-20">
      <div className="container  mx-auto">
        <div className="flex flex-wrap ">
          {
            BlogData.map(blog => (
              <div className="p-4 shadow-md md:w-4/12">
                <div className="h-full relative border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img src={require("../../../public/assets/about.jpg")}   className="ml-auto pl-14" />

                  <div className="sm:absolute bg-blue-600 text-white m-3 p-1 sm:top-0 "><h3>Lastest</h3></div>
                  <div className="pt-5 px-5">
                    <div className="flex pr-3">
                      <div className="flex "> <div className="pr-2"><FaUser /> </div>  <div className="pr-5"><h2 className="tracking-widest text-xs title-font font-medium text-gray-400 pr-5 mb-1">Rovert</h2></div></div>
                      <div className="flex"> <div className="pr-2"><BsCalendarDate /></div><div className=""><h2 className="tracking-widest text-xs title-font font-medium text-gray-400 pr-5 mb-1">05,10,2021</h2></div> </div>
                    </div>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{blog.heading}</h1>
                    <p className="leading-relaxed mb-3">{blog.dec}</p>
                    <div className="flex items-center flex-wrap ">
                      <Link href='/blog/blog-details' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        <a>
                        <>
                        Read More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                        </>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>

  );
};

export default BlogContainer;