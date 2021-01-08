import React from 'react';
import Banner from '../Images/dgf_header_pic.jpg';
import NavBar from '../Components/NavBar.js';

const Header = () => {
    return (
        <div className='header'>
            <img src={Banner} alt='Banner' />
            <NavBar />
        </div>
    );
}

export default Header;