import React from 'react';

import './info-bar.styles.scss';

const InfoBar = () => {

    return (
        <div className='info-bar'>
            <div className="info-bar__photo-box">
                <img src="resources/user-3.jpg" alt="chat information" className="info-bar__photo"/>
                <span className="info-bar__notification--online">&nbsp;</span>
            </div>
           

            <div className="info-bar__text">
                <span className="info-bar__name">John Smith</span>
                <span className="info-bar__user-name">@johnsmithofficial</span>
            </div>

            <div className="info-bar__icons">
                <a href="#" className="nav__link">
                      <svg className="info-bar__icon u-margin-right">
                          <use xlinkHref='resources/sprite.svg#icon-phone' />
                      </svg>
                </a>

                <a href="#" className="nav__link">
                      <svg className="info-bar__icon u-margin-right">
                          <use xlinkHref='resources/sprite.svg#icon-video' />
                      </svg>
                </a>

                <a href="#" className="nav__link">
                      <svg className="info-bar__icon">
                          <use xlinkHref='resources/sprite.svg#icon-dots-three-vertical' />
                      </svg>
                </a>
            </div>

        </div>
    );
}

export default InfoBar;