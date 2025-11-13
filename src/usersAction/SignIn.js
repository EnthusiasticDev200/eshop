import React, { useState } from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from "../firebaseAuth/authConfig"


function SignIn (){
    
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

 
    // login logic
    const logIn = async (e) => {
        e.preventDefault()

        if ( !email || !password ) {
            alert("email and password required")
            return
        }
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log("Login successful:", response.user);
            alert("Login successful!");
        } catch (error) {
            alert(error.message);
            console.error("Login error:", error);
        }   
    }
    return (
        <div className="signin">
            <div className="signin__container">

                <Link to="/" style={{textDecoration : "none"}}>
                    <div className="signin__logo">
                        <StorefrontIcon className='signin__logo__image'/>
                        <h2 className='signin__title'>eShop </h2>
                    </div>
                </Link>
                <div className="signIn__form">
                    <h3> Login</h3>

                    <form onSubmit={logIn}>
                        <h5>Email</h5>
                        <input 
                            type="email" 
                            className="email__input" 
                            value={email} 
                            onChange={ (e)=> setEmail(e.target.value)}/>

                        <h5>Password</h5>
                        <input 
                            type="password" 
                            className="password__input" 
                            value={password} 
                            onChange={ (e)=> setPassword(e.target.value)} /> <br />

                        <small className='remember__me'>
                            <input type="checkbox" /> Remember Me
                        </small> <br />

                        <button 
                            type='submit'
                            className='signIn__button' 
                            > Login in</button>

                        <div className="signUp__form">
                            <h5> Don't have an account? </h5>
                            <a 
                                href='/signup'
                                className="create__account__link" 
                                target='_blank'>
                                    Create account
                            </a> 
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}





export default SignIn