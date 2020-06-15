import React from 'react';

import './input.styles.scss';

const Input = () => {

    return (
        <form action="" className="form">
            <input 
                type="text" 
                className="form__input"
                placeholder="Type a message..."
            />
            <button className='form__button'>
                <svg className="form__icon">
                    <use xlinkHref='resources/sprite.svg#icon-navigation' />
                </svg>
            </button>
        </form>
    );
}

export default Input;