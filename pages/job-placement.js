import React from "react";
import Client from "../components/sections/jobPlacement/client";
import Overview from "../components/sections/jobPlacement/overView";
import PageTitle from "../components/shared/PageTitle";

const JobPlacement = () => {
  return (
    <>
      <PageTitle title="Job Placements" pageName="Job Placements" />
      <main>
        <Overview />
        <Client />
      </main>
    </>
  );
};

export default JobPlacement;
