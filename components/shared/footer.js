import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../../public/assets/sindabad_it.png";
import { MdLocationOn, MdEmail, MdCallEnd, MdPlayArrow } from "react-icons/md";
import { BsFacebook, BsYoutube, BsLinkedin, BsInstagram } from "react-icons/bs";
import { BsArrow90DegUp } from "react-icons/bs";
import Image from "next/image";
// import MessengerCustomerChat from "react-messenger-customer-chat";
const Footer = () => {
  const [visibility, setVisibility] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleCLick = () => {
    setPosition({ ...position, position: { top: 0, left: 0 } });
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      e.preventDefault();
      if (window.scrollY > 700) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    });
  });
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto">
        <div className="flex justify-between lg:flex-nowrap flex-wrap">
          <div className="lg:w-1/3 md:w-1/2 w-full md:mx-0 mx-5">
            <div className="w-36 mt-10 shadow-lg">
              <img width={"auto"}
                   src={Logo} alt="" srcset="" />
            </div>
            <div className="location flex items-center gap-x-3 my-5">
              <span className="text-orange-500">
                <MdLocationOn />
              </span>
              <span className="font-sm">London, United Kingdom</span>
            </div>
            <div className="location flex items-center gap-x-3 my-5">
              <span className="text-orange-500">
                <MdLocationOn />
              </span>
              <span className="font-sm">HA4 7AE and Mirpur, Dhaka-1216.</span>
            </div>
            <div className="mail flex items-center gap-x-3 my-5">
              <span className="text-orange-500">
                <MdEmail />
              </span>
              <span className="font-medium">sindabadit@gmail.com</span>
            </div>
            <div className="phone flex items-center gap-x-3 my-5">
              <span className="text-orange-500">
                <MdCallEnd />
              </span>
              <span className="font-medium">+44 7360 244115</span>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full md:my-10 md:mx-0 mx-5 my-4">
            <h2 className="text-lg font-semibold">Quick Services</h2>
            <div className="flex items-center gap-x-3 my-5">
              <span className="text-md text-orange-500">
                <MdPlayArrow />
              </span>
              <Link href="/" className="font-semibold">
                <a>Quick payment</a>
              </Link>
            </div>
            <div className="flex items-center gap-x-3 my-5">
              <span className="text-md text-orange-500">
                <MdPlayArrow />
              </span>
              <Link href="/" className="font-semibold">
                <a>Online payment</a>
              </Link>
            </div>
            <div className="flex items-center gap-x-3 my-5">
              <span className="text-md text-orange-500">
                <MdPlayArrow />
              </span>
              <Link href="/" className="font-semibold">
                <a>Web design course</a>
              </Link>
            </div>
            <div className="flex items-center gap-x-3 my-5">
              <span className="text-md text-orange-500">
                <MdPlayArrow />
              </span>
              <Link href="/" className="font-semibold">
                <a>Digital marketing</a>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full md:my-10 md:mx-0 mx-5 my-4">
            <h2 className="text-lg font-semibold">Useful Link</h2>
            <div className="flex items-center gap-x-3 my-5">
              <span className="text-md text-orange-500">
                <MdPlayArrow />
              </span>
              <Link href="/about-us" className="font-semibold">
                <a>About us</a>
              </Link>
            </div>
            <div className="flex items-center gap-x-3 my-5">
              <span className="text-md text-orange-500">
                <MdPlayArrow />
              </span>
              <Link href="/blog" className="font-semibold">
                <a>Blog</a>
              </Link>
            </div>
            <div className="flex items-center gap-x-3 my-5">
              <span className="text-md text-orange-500">
                <MdPlayArrow />
              </span>
              <Link href="/service/details" className="font-semibold">
                <a>Service</a>
              </Link>
            </div>
            <div className="flex items-center gap-x-3 my-5">
              <span className="text-md text-orange-500">
                <MdPlayArrow />
              </span>
              <Link href="/privacy-policy" className="font-semibold">
                <a>Privacy Policy</a>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full md:my-10 md:mx-0 mx-5 my-4">
            <h2 className="text-lg font-semibold">Flexible Work time</h2>
            <p className="text-lg py-3">9 AM - 6 PM , Sunday-Thursday</p>
            <p className="text-lg py-3">
              It’s time to have the most incredible software experience where
              our problem will meet its solution in the most transparent way.
              So, what are you waiting for?
            </p>
            <button className="px-5 py-3 bg-orange-700 rounded-sm hover:shadow-md uppercase shadow">
              Make Appointment
            </button>
          </div>
        </div>
        <div className="border-t">
          <div className="my-4 w-full flex items-center justify-center">
            <a
              href="https://www.facebook.com/SindabadIT"
              className="flex items-center justify-end"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <BsFacebook className="mx-4 text-3xl text-white rounded p-2 bg-blue-600" />
            </a>
            <a
              href="https://wa.me/message/5AG6Z2FNZYIGO1"
              className="flex items-center justify-end"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <BsYoutube className="mx-4 text-3xl text-white rounded p-2 bg-red-600" />
            </a>
            <a
              href="https://www.linkedin.com/company/sindabadit/"
              className="flex items-center justify-end"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <BsLinkedin className="mx-4 text-3xl text-white rounded p-2 bg-sky-500" />
            </a>
            <a
              href="https://www.instagram.com/Sindabadit/?fbclid=IwAR2tuNPPGySFqGLlusOAOfKSWsU6s7dIZXFsRt64TvkEDKWQa1s30rcYtKs"
              className="flex items-center justify-end"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <BsInstagram className="ml-4 text-3xl text-white rounded p-2 bg-red-500" />
            </a>
          </div>
          <p className="pb-5 font-medium text-center">
            Copyright all reserved &copy; Sindabad IT
          </p>
        </div>
      </div>
      <div>
        <span
          onClick={() => handleCLick()}
          className={`${visibility ? "right-0 bottom-0 fixed z-10 " : ""}`}
        >
          <BsArrow90DegUp className="relative w-12 h-12 text-white p-3 bg-orange-600 rounded-full mr-3 mb-5 drop-shadow-lg ring-gray-800  ring-8 cursor-pointer text-4xl" />
        </span>
      </div>
      {/* <MessengerCustomerChat pageId="338335586614635" appId="497900985052290" /> */}
    </footer>
  );
};

export default Footer;
