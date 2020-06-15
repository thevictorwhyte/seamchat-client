import React from 'react';

import './chat-window.styles.scss';

import InfoBar from '../info-bar/info-bar.component';
import Messages from '../messages/messages.component';
import Input from '../input/input.component';

const ChatWindow = () => {

    return (
        <div className='chat-window'>
            <InfoBar />
            <Messages />
            <Input />

        </div>
    );
}

export default ChatWindow;

