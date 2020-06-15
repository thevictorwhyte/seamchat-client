import React from 'react';

import './contact-window.styles.scss';

import Search from '../search/search.component';
import ContactCard from '../contact-card/contact-card.component';

const ContactWindow = () => {

    return (
        <div className='contact-window'>
           <Search />

           <div className="contact-list">
               <ContactCard />
           </div>
        </div>
    );
}

export default ContactWindow;

