import React from "react";
import BlogContainer from "../components/sections/blog/blogContainer";
import BlogSlider from "../components/sections/blog/blogSlider";
import Pagination from "../components/sections/blog/pagination";
import Sidebar from "../components/sections/blog/sidebar";
import PageTitle from "../components/shared/PageTitle";

const Blog = () => {
  return (
    <>
      <PageTitle title="Our Blog" pageName="Our Blog" />
      <main>
        {/* All section is here */}
        <BlogSlider />
        <div className=" lg:flex ">
          <div className="w-9/12 flex">
            <BlogContainer />
          </div>
          <div className="p-20 lg:p-0 lg:py-16 lg:w-2/12">
            <Sidebar />
          </div>
        </div>
        <div className="mx-auto p-10">
          <Pagination />
        </div>
      </main>
    </>
  );
};

export default Blog;
