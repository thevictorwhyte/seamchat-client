import React from 'react';

import './header.styles.scss';

const Header = () => {

    return (
        <div className='header'>
            <div className='header__picture-box'>
                <img src="resources/user.png" alt="header image" className='header__picture'/>
            </div>

            <div className='header__text'>
            <h2 className='header__user-name'>Victor Whyte</h2>
            <h3 className='header__name'>@thevictorwhyte</h3>
            </div>
        </div>
    );
}

export default Header;