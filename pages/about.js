import React from "react";
import AboutMore from "../components/sections/About/aboutMore";
import AboutTitle from "../components/sections/About/aboutTitle";
import GreatPlanning from "../components/sections/About/greatPlanning";
import OurApp from "../components/sections/About/ourApp";
import OurMission from "../components/sections/About/ourMission";
import OurVission from "../components/sections/About/ourVission";
import SatisfiedClient from "../components/sections/About/satisfiedClient";

const About = () => {
  return (
    <>
      <main>
        {/* All section is here */}
        <AboutTitle />
        <AboutMore />
        <GreatPlanning />
        <OurMission />
        <OurVission />
        <SatisfiedClient />
        <OurApp />
      </main>
    </>
  );
};

export default About;
