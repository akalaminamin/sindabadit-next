import Image from 'next/image';
import React from 'react';

const AboutMore = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto">
                <div className="bg-white dark:bg-gray-800 overflow-hidden flex flex-wrap justify-between items-center">
                    <div className="text-start md:w-1/2 w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            More About Our Work
                        </h2>
                        <p className="mt-2">
                            <p className="text-base leading-6 text-gray-500">
                                Sindabad IT Ltd. is a private IT service and IT support company with a history since 2018. We work on the virtual platform but got our registration in the year 2021.
                                Today, we are a proud team of IT engineers who grow by developing their sleeves, solving your IT problems, and meeting your business needs.
                                If you're wondering why you should choose us to build your infrastructure, support your people and systems, and advise you on projects that will reduce your risk, increase your productivity, and give you a true competitive advantage.
                            </p>
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <img alt="about more sindabad it" src={require("../../../public/assets/about_more.jpg")} className="h-full w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMore;