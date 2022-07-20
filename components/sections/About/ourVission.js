import Image from 'next/image';
import React from 'react';

const OurVission = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto">
                <div className="bg-white dark:bg-gray-800 overflow-hidden flex flex-wrap justify-between items-center">
                    <div className="md:w-1/2 w-full">
                        <img alt="about more sindabad it"   src={require("../../../public/assets/about_more.jpg")} className="h-full w-full" />
                    </div>
                    <div className="text-start md:w-1/2 w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            Our Vission
                        </h2>
                        <p className="mt-2">
                            <p className="text-base leading-6 text-gray-500">
                                We have highly qualified engineers with excellent technical knowledge and experience in using the latest software standards, tools, platforms, frameworks, and technologies and we continually invest in training and education to be able to respond to any new technological challenges and demands from our customers.
                                Since each client has its particular needs, our offer incorporates all sorts of exercises related to program improvement arrangements, so that we will meet any requirements you'll have for customized computer program advancement ventures.
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurVission;