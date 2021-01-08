import React from 'react';
import Banner from '../Images/dgf_header_pic.jpg';

const Header = () => {
    return (
        <div className='header'>
            <img src={Banner} alt='Banner' />
            <div className='buttons'>
                <button>sdfg</button>
                <button>sdfhgdfsg</button>
                <button>dsfg</button>
                <button>dsfg</button>
            </div>
        </div>
    );
}

export default Header;