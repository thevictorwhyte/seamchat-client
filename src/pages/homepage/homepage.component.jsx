import React from 'react';

import NavigationWindow from '../../components/navigation-window/navigation-window.component';
import ChatWindow from '../../components/chat-window/chat-window.component';
import ContactWindow from '../../components/contact-window/contact-window.component';

import './homepage.styles.scss';

const HomePage = ({darkmode, handleMode}) => {

        return (
            <div className={darkmode ? 'app darkmode' : 'app lightmode'}>
                <NavigationWindow handleMode={handleMode} darkmode={darkmode}/>
                <ChatWindow />
                <ContactWindow />
            </div>
        );
}

export default HomePage;