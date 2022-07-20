import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail, MdCallEnd } from "react-icons/md";
// import i18next from "i18next";

const TopHeader = () => {
  function handleClick(lang) {
    // i18next.changeLanguage(lang);
    window.alert("This feature currenlty pending")
  }
  return (
    <div className="bg-gray-800 py-2">
      <div className="container mx-auto">
        <div className="md:flex flex-wrap items-center md:justify-between justify-center">
          <div className="flex w-full lg:w-6/12 md:gap-x-5 justify-between md:justify-start px-1 md:px-0 py-2 md:py-0">
            <div className="flex items-center gap-x-3">
              <span className="text-orange-500 text-xl">
                <MdCallEnd />
              </span>
              <span className="font-medium text-white text-sm">
                +44 7360 244115
              </span>
            </div>
            <div className="flex items-center gap-x-3">
              <span className="text-orange-500 text-xl">
                <MdEmail />
              </span>
              <span className="font-medium text-white text-sm">
                sindabadit@gmail.com
              </span>
            </div>
          </div>
          <div className="flex items-center px-1 md:px-0 justify-between">
            <div className="flex items-center gap-x-3 px-0 md:px-4">
              <a
                href="https://wa.me/message/5AG6Z2FNZYIGO1"
                className="flex items-center"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <BsWhatsapp className="text-3xl text-orange-600 p-2" />
                <span className="font-medium text-white text-sm">Whatsapp</span>
              </a>
            </div>
            <div className="flex items-center gap-x-3">
              <div>
                <select
                  type="button"
                  className="inline-flex justify-center w-full  shadow-sm px-1 py-1 bg-orange-600 text-sm font-medium text-white hover:bg-orange-700  transition ease-in duration-200 text-md text-white uppercase font-medium shadow-md focus:outline-none"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <option onClick={() => handleClick("en")}>EN</option>
                  <option onClick={() => handleClick("ko")}>BD</option>
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopHeader;
