import React from 'react';
import Categories from './categories';
import LatestPost from './latestPost';
import PopularTag from './popularTag';
import SearchBar from './searchBar';

const Sidebar = () => {
    return (
        <section className="">
            <SearchBar />
            <Categories />
            <LatestPost />
            <PopularTag />
            
        </section>
    );
};

export default Sidebar;