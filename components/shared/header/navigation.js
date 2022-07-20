import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import photo from "../../../public/assets/sindabad_it.png";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";
import { coursedb, serviceNevdb } from "../../../db/db.local";
const Navigation = () => {
  const [fixed, setFixed] = useState(false);
  const [show, setShow] = useState(false);
  //   const scrollHandler = () => {
  //     if (window.scrollY >= 36) {
  //       setFixed(true);
  //     } else {
  //       setFixed(false);
  //     }
  //   };
  //   document.addEventListener("scroll", scrollHandler);

  return (
    <section
      className={`${fixed && "fixed top-0 w-full z-50 bg-white shadow-md"}`}
    >
      <div className="container mx-auto">
        <nav className={`lg:flex justify-between items-center py-3`}>
          {/* logo */}
          <div className="flex items-center justify-between">
            <Link href="/" className="inline cursor-pointer">
              <Image
                className="w-20 cursor-pointer"
                src={photo}
                alt="sindabad it"
                width="300"
                height="60"
                objectFit="cover"
              />
            </Link>
            <button onClick={() => setShow(!show)} className="block lg:hidden">
              <GoThreeBars className="text-4xl" /> 
            </button>
          </div>
          {/* nav items */}
          <ul
            className={`${
              show ? "block" : "hidden"
            } lg:flex items-center justify-between`}
          >
            <li className="hover:text-orange-500 text-gray-800 mx-5 py-2 rounded-md text-md uppercase font-medium cursor-pointer">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="relative expand_service">
              <Link href="/courses">
                <div className="hover:text-orange-500 text-gray-800 mx-5 py-2 rounded-md text-md uppercase font-medium cursor-pointer flex items-center ">
                  <a>Courses</a>
                  <MdOutlineArrowDropDown className="text-2xl" />
                </div>
              </Link>
              <div className="absolute z-50 mx-auto mt-1 transform px-2 w-screen max-w-7xl sm:px-0 lg:left-64 lg:-translate-x-1/2 service_expand">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {coursedb.map((item) => (
                      <a
                        href={`/courses/${"#" + item.path}`}
                        className="py-2 px-4 shadow"
                      >
                        <h4 className="text-orange-600 text-lg font-medium">
                          {item.title}
                        </h4>
                        <ul>
                          {item?.items?.map((child) => (
                            <li className="text-md my-2">{child}</li>
                          ))}
                        </ul>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </li>
            <li className="relative expand_service">
              <Link href="/services">
                <div className="hover:text-orange-500 text-gray-800 mx-5 py-2 rounded-md text-md uppercase font-medium cursor-pointer flex items-center ">
                  <a>Services</a>
                  <MdOutlineArrowDropDown className="text-2xl" />
                </div>
              </Link>
              <div className="absolute z-50 mx-auto mt-1 transform px-2 w-screen max-w-7xl sm:px-0 lg:left-28 lg:-translate-x-1/2 service_expand">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 ">
                    {serviceNevdb.map((item) => (
                      <a
                        href={`/services/${"#" + item.path}`}
                        className="py-2 px-4 shadow"
                      >
                        <h4 className="text-orange-600 text-lg font-medium">
                          {item.title}
                        </h4>
                        <ul>
                          {item.items.map((child) => (
                            <li className="text-md my-2">{child}</li>
                          ))}
                        </ul>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </li>
            <li className="hover:text-orange-500 text-gray-800 mx-5 py-2 rounded-md text-md uppercase font-medium cursor-pointer">
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li className="hover:text-orange-500 text-gray-800 mx-5 py-2 rounded-md text-md uppercase font-medium cursor-pointer">
              <Link href="/job-placement">
                <a>Job Placement</a>
              </Link>
            </li>
            <li className="hover:text-orange-500 text-gray-800 mx-5 py-2 rounded-md text-md uppercase font-medium cursor-pointer">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className="hover:text-orange-500 text-gray-800 mx-5 py-2 rounded-md text-md uppercase font-medium cursor-pointer">
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
            <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200  transition ease-in duration-200 text-md text-white uppercase font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
              Get more
            </button>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
