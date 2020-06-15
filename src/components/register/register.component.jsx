import React from 'react';

import './register.styles.scss';

const Register = () => {

    return (
        <div className="sign-in-sign-up-form-container">
            <form action="#" className="sign-in-form">
                <div className="sign-in-form__group">
                    <input 
                        type="text" 
                        name="firstname" 
                        className="sign-in-form__input" 
                        placeholder="first name"
                        id="firstname" 
                        
                        required
                    />

                    <label htmlFor="firstname" className="sign-in-form__label">first name</label>
                    
                </div>

                <div className="sign-in-form__group">
                    <input 
                        type="text" 
                        name="lastname" 
                        className="sign-in-form__input" 
                        placeholder="last name"
                        id="lastname" 
                        
                        required
                    />

                    <label htmlFor="lastname" className="sign-in-form__label">last name</label>
                    
                </div>

                <div className="sign-in-form__group">
                    <input 
                        type="text" 
                        name="username" 
                        className="sign-in-form__input" 
                        placeholder="username"
                        id="username" 
                        
                        required
                    />

                    <label htmlFor="username" className="sign-in-form__label">username</label>
                    
                </div>

                <div className="sign-in-form__group">
                    <input 
                        type="text" 
                        name="email" 
                        className="sign-in-form__input" 
                        placeholder="email"
                        id="email" 
                        
                        required
                    />

                    <label htmlFor="email" className="sign-in-form__label">email</label>
                    
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
                >Register</button>
                
            </form>
        </div>
    );
}

export default Register;