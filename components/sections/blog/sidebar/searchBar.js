import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
    return (

        <div className="p-4 shadow-md md:w-full h-35">
            <h2 className="pb-4 text-lg leading-6 font-medium text-gray-900 dark:text-white">Search</h2>
            <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3  bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <AiOutlineSearch />
                </span>
                <input type="text" id="email-with-icon" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Search" />
            </div>
        </div>

    );
};

export default SearchBar;