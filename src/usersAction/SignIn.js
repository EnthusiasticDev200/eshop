import React, { useState } from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront';

import { db, auth } from "../firebaseAuth/authConfig"


function SignIm (){
    // useHistory hook ??
    //const history = useHistory(); // from route history in App.js
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    // login logic
    const logIn = e =>{
        e.preventDefault()
        const response = auth.signInWithEmailAndPassword( email, password)
        console.log(" login response", response)
        .then( response => alert("login successful") ) 
        .catch( error => alert( error.message ) ) //display error
    }

    const signUp = e =>{
        e.preventDefault();
        
        const response = auth.createUserWithEmailAndPassword( email, password )
        .then( response => {
            // if reg OK
           if (response)  alert("reg OK ")//history.push("/") 
        })
        .catch( error => alert( error. message ))
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
                    <form action="">
                        <h5>Email</h5>
                        <input type="text" className="email__input" value={email} onChange={e=> setEmail(e.target.email)}/>

                        <h5>Password</h5>
                        <input type="password" className="password__input" value={password} onChange={e=> setPassword(e.target.password)} /> <br />
                        <small className='remember__me'>
                            <input type="checkbox" /> Remember Me
                        </small> <br />
                        <button type='submit'className='signIn__button' onClick={logIn}> Login in</button>

                        <div className="signUp__form">
                            <h5> Don't have an account? </h5>
                            <a href='default.asp'className="create__account__link" target='_blank' onClick={signUp}>Create account</a> 
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}





export default SignIm