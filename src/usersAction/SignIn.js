import React, { useState, useContext } from 'react'
import './SignIn.css'
import { Link, useNavigate } from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { doc,getDoc } from 'firebase/firestore';

import { auth, db } from "../firebaseAuth/authConfig"

import UserContext from 'context/userContext';


function SignIn (){
    
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const navigate = useNavigate()
     //initate setuser
    const { setUser } = useContext(UserContext)
    
    // login logic
    const logIn = async (e) => {
        e.preventDefault()

        if ( !email || !password ) {
            alert("email and password required")
            return
        }
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log("response ",response)
        
            // if successful, get username
            const user = auth.currentUser;
            if ( !user ) {
                alert("Please login")
                return
            }
            console.log("user", user)
            // get firestore db
            const userDoc = await getDoc(doc(db, "users", user.uid))
            
            if (userDoc.exists()) {
                const username = userDoc.data().username   
               
                //update global user context
                setUser({
                    username : username
                })
                alert(`Welcome ${username}`)
            }
            navigate('/') // redirect home
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
                            className="signIn__email__input" 
                            value={email} 
                            onChange={ (e)=> setEmail(e.target.value)}/>

                        <h5>Password</h5>
                        <input 
                            type="password" 
                            className="signIn__password__input" 
                            value={password} 
                            onChange={ (e)=> setPassword(e.target.value)} /> <br />

                        <small className='remember__me'>
                            <input type="checkbox" /> Remember Me
                        </small> <br />

                        <button 
                            type='submit'
                            className='signIn__button' 
                            > Login in</button>

                        <div className="link__signUp__form">
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