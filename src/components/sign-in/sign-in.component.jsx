import React from 'react';
import { Route } from 'react-router-dom';

import './sign-in.styles.scss';

import HomePage from '../../pages/homepage/homepage.component';

const SignIn = () => {

    return (
        <div className="sign-in-sign-up-form-container">
            <form action="#" className="sign-in-form">
                <div className="sign-in-form__group">
                    <input 
                        type="text" 
                        name="email" 
                        className="sign-in-form__input" 
                        placeholder="email or username"
                        id="email" 
                        autofocus
                        required
                    />

                    <label htmlFor="email" className="sign-in-form__label">email or username</label>
                    
                </div>

                <div className="sign-in-form__group">
                    
                    <input 
                        type="password" 
                        name="password" 
                        className="sign-in-form__input" 
                        placeholder="password"
                        id="password"
                        required
                    />

                    <label htmlFor="password" className="sign-in-form__label">password</label>
                </div>

                <button  
                    className="sign-in-form__btn"
                >Log in</button>
                
            </form>
        </div>
        
    );
}

export default SignIn;