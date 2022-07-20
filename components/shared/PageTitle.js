import React from "react";
import Link from "next/link";

const PageTitle = ({ pageName, title }) => {
  return (
    <section className="bg-slate-900 border-b">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-full h-full ">
          <h2 className="text-center text-white text-5xl text-extrabold p-6">
            {pageName}
          </h2>
          <div className="text-center  ">
            <Link className="px-1 text-white text-2xl" href="/">
              <a>Home</a>
            </Link>
            <span className="text-2xl text-white px-1 text-center"> / </span>
            <span className="text-2xl text-orange-500 text-center">
              {" "}
              {title}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
