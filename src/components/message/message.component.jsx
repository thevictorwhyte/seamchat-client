import React from 'react';

import './message.styles.scss';


const Message = () => {
    //let isFromUser = true; this is the logic for when we start pulling in data
    return (
        <div className="message-container">
            <div className="message">
                <span className="message__name">John Smith</span>
                <p className="message__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus.</p>
                <span className="message__time">11:12am</span>
            </div>

            <div className="message-mine">
                <p className="message-mine__text">tempore nemo maxime minus laborum expedita facere consequuntur...</p>
                <span className="message-mine__time">11:14am</span>
            </div>

            <div className="message">
                <span className="message__name">John Smith</span>
                <p className="message__text">consectetur adipisicing elit. Reprehenderit possimus.</p>
                <span className="message__time">11:30am</span>
            </div>

            <div className="message-mine">
                <p className="message-mine__text"> laborum expedita facere &#128522; &#128522; &#128522;</p>
                <span className="message-mine__time">11:14am</span>
            </div>
        </div>
        
    );
}

export default Message;