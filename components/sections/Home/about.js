import React from "react";
const About = () => {
    return (
        <section id="about" className="my-20">
            <div class="container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800">
                <div class="flex flex-wrap -mx-8">
                    <div class="w-full lg:w-1/2 px-8">
                        <div class="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                            <h2 class="mb-4 text-3xl lg:text-4xl font-bold font-heading dark:text-white">
                                We pride ourselves on being the favored accomplice for IT
                                outsourcing in East Asia, America, and Europe
                            </h2>
                            <p class="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                                We pride ourselves on being the favored accomplice for IT
                                outsourcing in East Asia, America, and Europe. Over the past
                                long time, Bangladesh, the UK, Israel, USA has picked up a solid
                                and dependable nearness in giving IT outsourcing administrations
                                by demonstrating to be an effective accomplice, due to its
                                fabulous opportune conveyance and get to an extraordinary pool
                                of ability and most recent innovations.
                            </p>
                            <button
                                type="button"
                                class="px-10 py-3 bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200 text-white  transition ease-in duration-200 text-center text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                            >
                                See more
                            </button>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 px-8">
                        <ul class="space-y-12">
                            <li class="flex -mx-4">
                                <div class="px-4">
                                    <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-orange-50 text-orange-600">
                                        1
                                    </span>
                                </div>
                                <div class="px-4">
                                    <h3 class="my-4 text-xl font-semibold dark:text-white">
                                        Responsive Elements
                                    </h3>
                                    <p class="text-gray-500 dark:text-gray-300 leading-loose">
                                        All elements are responsive and provide the best display in
                                        all screen size. It&#x27;s magic !
                                    </p>
                                </div>
                            </li>
                            <li class="flex -mx-4">
                                <div class="px-4">
                                    <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-orange-50 text-orange-600">
                                        2
                                    </span>
                                </div>
                                <div class="px-4">
                                    <h3 class="my-4 text-xl font-semibold dark:text-white">
                                        Flexible Team
                                    </h3>
                                    <p class="text-gray-500 dark:text-gray-300 leading-loose">
                                        Flexibility is the key. All team is available 24/24 and
                                        joinable every day on our hotline.
                                    </p>
                                </div>
                            </li>
                            <li class="flex -mx-4">
                                <div class="px-4">
                                    <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-orange-50 text-orange-600">
                                        3
                                    </span>
                                </div>
                                <div class="px-4">
                                    <h3 class="my-4 text-xl font-semibold dark:text-white">
                                        Ecologic Software
                                    </h3>
                                    <p class="text-gray-500 dark:text-gray-300 leading-loose">
                                        Our Software are ecologic and responsable. Green is not just
                                        a color, it&#x27;s a way of life.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
