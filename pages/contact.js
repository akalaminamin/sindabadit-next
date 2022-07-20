import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto my-20">
        <div className="title">
          <h2 className="text-3xl font-extrabold leading-9  text-gray-900 mb-12">
            Contact Us
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-6/12">
            <form className="flex space-x-3">
              <div className="px-5 py-10 w-full bg-white dark:bg-gray-800">
                <h2 className="text-3xl font-extrabold leading-9  text-gray-900 mb-12">
                  Get update by email
                </h2>
                <div className="grid  grid-cols-2 gap-4 m-auto">
                  <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                      <input
                        type="text"
                        className=" border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                      <input
                        type="text"
                        className=" border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                        placeholder="email"
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label className="text-gray-700" for="name">
                      <textarea
                        className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                        placeholder="Enter your comment"
                        name="comment"
                        rows="5"
                        cols="40"
                      ></textarea>
                    </label>
                  </div>
                  <div className="col-span-2 text-right">
                    <button
                      type="submit"
                      className="py-2 px-4  bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  "
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-6/12">
            <iframe
              width={100 + "%"}
              height={340 + "px"}
              title="sindabad it location"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58405.583681482625!2d90.32714638587964!3d23.806186377340694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755c7ebb77cfef3%3A0xd5a1ed34c1dbee86!2ssindabad%20IT!3m2!1d23.8061118!2d90.3621661!5e0!3m2!1sen!2sbd!4v1645878535915!5m2!1sen!2sbd"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
