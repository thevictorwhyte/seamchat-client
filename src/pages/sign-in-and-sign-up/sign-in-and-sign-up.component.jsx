import React, { useState } from 'react';

import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import Register from '../../components/register/register.component'

const SignInAndSignUp = ({darkmode, handleMode}) => {
    const [form, setForm] = useState('signin');


    return (
        <div className={darkmode ? 'darkmode sign-in-and-sign-up' : 'lightmode sign-in-and-sign-up'}>
            <div className="sign-in-and-sign-up__header">
                <div className="sign-in-and-sign-up__header-content">
                    <h1 className="sign-in-and-sign-up__header-text">SeamChat</h1>
                    <span className="sign-in-and-sign-up__header-tagline">Seamless chat with friends and co-workers</span>
                </div>
                
                <button className='mode__button sign-in-and-sign-up__header-btn' onClick={handleMode}>{darkmode ? 'switch to light mode' : 'Switch to dark mode'}</button> 
            </div>

            <div className="sign-in-and-sign-up-form">
                
                <div className="sign-in-and-sign-up-form__btns">
                    <button 
                        className={form === 'signin' ? 'sign-in-and-sign-up-form__btn sign-in-btn' : 'sign-in-and-sign-up-form__btn'}
                        onClick={() => setForm('signin')}
                    >Sign In</button>
                    <button 
                        className={form === 'register' ? 'sign-in-and-sign-up-form__btn register-btn' : 'sign-in-and-sign-up-form__btn'}
                        onClick={() => setForm('register')}
                    >Register</button>

                    {
                    form === 'signin' 
                    ? <SignIn />
                    : <Register />
                    }
                </div>

                
            </div>
              
        </div>
    );
}

export default SignInAndSignUp;