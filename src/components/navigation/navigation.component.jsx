import React from 'react';

import './navigation.styles.scss';


const Navigation = () => {

    return (
        <nav className='nav'>
            <ul className="nav__list">
              <li className="nav__item nav__item--active">
                  <a href="#" className="nav__link">
                      <svg className="nav__icon">
                          <use xlinkHref='resources/sprite.svg#icon-chat' />
                      </svg>
                      <span>Chat</span>
                  </a>
              </li>

              <li className="nav__item">
                  <a href="#" className="nav__link">
                        <svg className="nav__icon">
                          <use xlinkHref='resources/sprite.svg#icon-user' />
                        </svg>
                      <span>Profile</span>
                  </a>
              </li>

              <li className="nav__item">
                  <a href="#" className="nav__link">
                        <svg className="nav__icon">
                          <use xlinkHref='resources/sprite.svg#icon-cog' />
                        </svg>
                        <span>Settings</span>
                  </a>
              </li>

              <li className="nav__item">
                  <a href="#" className="nav__link">
                        <svg className="nav__icon">
                          <use xlinkHref='resources/sprite.svg#icon-log-out' />
                        </svg>
                        <span>Logout</span>
                  </a>
              </li>
            </ul>  
        </nav>
    );
}

export default Navigation;

