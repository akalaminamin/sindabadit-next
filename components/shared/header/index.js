import React from 'react';
import Navigation from './navigation';
import TopHeader from './topHeader';

const Header = () => {
    return (
        <header>
          <TopHeader/>
          <Navigation/>  
        </header>
    );
};

export default Header;