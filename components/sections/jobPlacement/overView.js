import Image from 'next/image';
import React from 'react';
// import internShip from '../../../assets/facilities/Internship.jpg'
const Overview = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto">
                <div className="text-start  py-5 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white sm:text-4xl py-5">
                        Overview
                    </h2>
                    <p className="mt-2">
                        <p className="text-base leading-6 text-gray-500">
                            From the gratitude of wonder, we also affectionate our students through our Job Placement Cell (JPC). A career placement cell working for the students' career choice is heading to meet the challenge of building a Digital Bangladesh since its birth. Students are being able to meet up the challenges of a corporate world through the seminars arranged by our Job Placement Cell.
                        </p>
                    </p>
                    <p className="mt-4">
                        <p className="text-base leading-6 text-gray-500">
                            We evaluate our every students in different manners or aspects. Making a student be apt within the shortest possible time is really a challenge for the cell. Students are being able to know how to write formal letters for official purposes, cover letters and making their CVs along with some etiquettes and manners through this cell. Creative IT always tries to ensure the placement of each and every students in different IT sectors both nationally and internationally. The students who desire to have a job are offered different categorized job opportunities available in the various companies across the world. Placement cell manages the database and ensures all amenities of the particular company for our students.                        </p>
                    </p>
                </div>
                <div className="text-start  py-3 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white sm:text-4xl py-5">
                        Objectives
                    </h2>
                    <p className="mt-2">
                        <p className="text-base leading-6 text-gray-500">
                            The main purpose of our Job Placement Cell is to guide students to choose the right career and to give knowledge, skill, and aptitude thus meeting the manpower requirements of the Industry. Besides our team is working-                        </p>
                    </p>
                    <ul className="pt-5 list-disc">
                        <li className=" py-2">  To construct a bridge between our students and the IT Industry</li>
                        <li className=" py-2">To enhance the skills of students for Industry ready employer</li>
                        <li className=" py-2">To provide ultimate satisfaction to our valuable students by offering the companies of their choice according to their eligibility</li>
                    </ul>
                </div>
                <div className="text-start  py-3 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white sm:text-4xl py-5">
                        Job Placement Facilities
                    </h2>
                    <p className="mt-2">
                        <p className="text-base leading-6 text-gray-500">
                            The industry is always on the lookout for students who are vibrant, energetic individuals and ready to accept challenges, attentive, a good academic background, fast learners, open to learning even at work and more importantly, good communication skills. Under job placement cell we ensure facilities to our students.
                        </p>
                    </p>
                    <p className="mt-2">
                        <p className="text-base leading-6 text-gray-500">
                            Aside from creating opportunities, we ensure the active participation of our students. After successful completion of the professional course, students prepare their portfolio, resume and such. Just after the course completion, our placement cell starts their lookout for suitable placement of the student. The placement cell ensures facilities as follows:                        </p>
                    </p>
                    <h2 className="text-xl underline font-semibold text-gray-800 dark:text-white sm:text-4xl py-5">
                        Market Analysis
                    </h2>
                    <p className="mt-2">
                        <p className="text-base leading-6 text-gray-500">
                            We do the market analysis to prepare our course curriculum according to the market demand. Throughout the training program, students acquire knowledge of technical parts and also get an opportunity to visit industry. Thus they get an idea on how the operations are taking place. After the market analysis, it is easier for them to make preparations. It also helps to create networks.                        </p>
                    </p>
                    <h2 className="text-xl underline font-semibold text-gray-800 dark:text-white sm:text-4xl py-5">
                        Grooming Session
                    </h2>
                    <p className="mt-2">
                        <p className="text-base leading-6 text-gray-500">
                            Keeping in view the industry requirements, the training curriculum is designed to prepare entry-level jobs to advanced level jobs. We ensure hands-on training in live projects according to industry demand. Besides our job placement cell ensures grooming session on-                        </p>  </p>
                    <ul className="pt-5 list-disc">
                        <li className=" py-2">  Tips and Tricks on preparing the resume</li>
                        <li className=" py-2">Demo practices on how to face an interview</li>
                        <li className=" py-2">Career session by industry experts</li>
                        <li className=" py-2">Practical classes</li>
                        <li className=" py-2">Improving presentation skills</li>
                        <li className=" py-2">Building Portfolio</li>
                    </ul>
                    <h2 className="text-xl underline font-semibold text-gray-800 dark:text-white sm:text-4xl py-5">
                        Internship Opportunity
                    </h2>
                    <p className="mt-2">
                        <p className="text-base leading-6 text-gray-500">
                            Starting a job or a placement in a corporate environment becomes a new challenge of life for many of our students. Sometimes working environment of a company might not appear in favour at first glance. Thus, Creative IT creates internship opportunities for our students in order to face the challenge to adjust. This opportunity helps our students for their self-assessment evaluation.                                      </p>
                    </p>
                    <p className="mt-2">
                        <p className="text-base leading-6 text-gray-500">
                            The Job Placement Cell provides all sorts of counselling needed for students' career growth. After a successful counselling, our team is always dedicated for grooming of all our new employees. Internship opportunity boosts the confidence of our students and it also aims to make them prepare for their future. We are always open to our students for guidance and help them throughout the process of building a bright future.                              </p>
                    </p>
                       <div className="max-h-90">
                           <img width={"auto"}
                   src={require("../../../public/assets/team1.jpg")} alt="overview " />
                       </div>

                </div>
            </div>
        </section>
    );
};

export default Overview;