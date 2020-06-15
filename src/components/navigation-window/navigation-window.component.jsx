import React from 'react';

import './navigation-window.styles.scss';

import Header from '../header/header.component';
import Navigation from '../navigation/navigation.component';

const NavigationWindow = ({handleMode, darkmode}) => {

    return (

        <div className='navigation-window'>
            <Header />
            <Navigation />
            <div className='legal'>
                <button className='mode__button' onClick={handleMode}>{darkmode ? 'switch to light mode' : 'Switch to dark mode'}</button>
                    
                <div className='legal__text'>Made with <span style={{color: 'red'}}>&#10084;</span> by Victor Whyte</div>
            </div>
        </div>
    );
}

export default NavigationWindow;

