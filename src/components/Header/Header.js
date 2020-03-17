import React from 'react';
import banner from '../../images/banner.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={banner} alt="banner" className="banner-img"/>
            <nav>
                <a href="/house">House</a>
                <a href="/pro_book">Pro_book</a>
                <a href="/total_focus">Total_Focus</a>
            </nav>
        </div>
    );
};

export default Header;