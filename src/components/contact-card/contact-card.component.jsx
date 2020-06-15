import React from 'react';

import './contact-card.styles.scss';

const ContactCard = () => {

    return (
        <div className='temporary-div'>
            <div className='contact-card contact-card--active'>
                <div className='contact-card__user-photo-box'>
                    <img src="resources/user-3.jpg" alt="contact user" className='contact-card__user-photo'/>
                    <span className="contact-card__notification--online">&nbsp;</span>
                </div>

                <div className="contact-card__text">
                    <span className="contact-card__user-name">John Smith</span>
                    <p className="contact-card__recent-chat">consectetur adipisicing elit Reprehenderit...</p>
                </div>

                <span className='contact-card__timestamp'>11:32pm</span>
            </div>

            <div className='contact-card'>
                <div className='contact-card__user-photo-box'>
                    <img src="resources/user-2.jpg" alt="contact user" className='contact-card__user-photo'/>
                    <span className="contact-card__notification--online">&nbsp;</span>
                </div>

                <div className="contact-card__text">
                    <span className="contact-card__user-name">Amy Adams</span>
                    <p className="contact-card__recent-chat">Autem facere hic unde culpa quibusdam...</p>
                </div>

                <span className='contact-card__timestamp'>9:02am</span>
            </div>

            <div className='contact-card'>
                <div className='contact-card__user-photo-box'>
                    <img src="resources/user-4.jpg" alt="contact user" className='contact-card__user-photo'/>
                    <span className="contact-card__notification--away">&nbsp;</span>
                </div>

                <div className="contact-card__text">
                    <span className="contact-card__user-name">Joe Gomez</span>
                    <p className="contact-card__recent-chat">Voluptatibus, culpa magnam placeat...</p>
                </div>

                <span className='contact-card__timestamp'>2:30pm</span>
            </div>

            <div className='contact-card'>
                <div className='contact-card__user-photo-box'>
                    <img src="resources/user-5.jpg" alt="contact user" className='contact-card__user-photo'/>
                    <span className="contact-card__notification--online">&nbsp;</span>
                </div>
                <div className="contact-card__text">
                    <span className="contact-card__user-name">Phil Edwards</span>
                    <p className="contact-card__recent-chat">fugit voluptas dolores quos...</p>
                </div>

                <span className='contact-card__timestamp'>11:30am</span>
            </div>
            
            <div className='contact-card'>
                <div className='contact-card__user-photo-box'>
                    <img src="resources/user-6.jpg" alt="contact user" className='contact-card__user-photo'/>
                    <span className="contact-card__notification--online">&nbsp;</span>
                </div>
                <div className="contact-card__text">
                    <span className="contact-card__user-name">Stacy Brookes</span>
                    <p className="contact-card__recent-chat">aliquid quo recusandae molestias at enim...</p>
                </div>

                <span className='contact-card__timestamp'>7:45am</span>
            </div>
        </div>
        
    );
}

export default ContactCard;

