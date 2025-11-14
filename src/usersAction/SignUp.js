import React, { useState } from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

import { db, auth } from "../firebaseAuth/authConfig"



function SignUp (){
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ middleName, setMiddleName ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phoneNumber, setPhoneNumber ] = useState('')
    const [ role, setRole ] = useState('')

    const [ password, setPassword] = useState('')

    const navigate = useNavigate()

    // sign up logic
    const registerUser = async ( e) =>{
        e.preventDefault();

        if ( !firstName || !lastName || !password || !username || !email || !phoneNumber || !role ){
            alert("Omitted field is required")
            return
        }
        try{
            // create user with firebase auth first
            const createUserAuth = await createUserWithEmailAndPassword (auth, email, password) 
            // extract user info
            const user = createUserAuth.user
            //create user profile info in firestore database
            const response = await setDoc(doc (db, "users", user.uid), { // collection = "users"
                firstName, lastName, middleName, username, email,
                phoneNumber, role,
                uid : user.uid,
                createdAt : new Date().toISOString()
            })
            alert('new user created successfully')
            // redirect to login
            navigate("/signin") 
        }catch(error){
            console.log("error creating new user", error)
            alert(error.message)
        }
        

    }

    return (
        <div className="signup">

            <Link to="/" style={{textDecoration : "none"}}>
                    <div className="signup__logo">
                        <StorefrontIcon className='signup__logo__image'/>
                        <h2 className='signup__title'>eShop </h2>
                    </div>
                </Link>

            <div className="signup__container">
                <h4> Fill in the form below</h4>

                <div className="signUp__form">
                
                    <form onSubmit={registerUser} className='form'>
                        <h5>First Name</h5>
                        <input 
                            type="text" 
                            className="signUp__firstName__input" 
                            value={firstName} 
                            required
                            onChange={ (e)=> setFirstName(e.target.value)}
                        />

                        <h5>Last Name</h5>
                        <input 
                            type="text" 
                            className="signUp__lastName__input" 
                            value={lastName} 
                            required
                            onChange={ (e)=> setLastName(e.target.value)}
                        />

                        <h5>Middle Name</h5>
                        <input 
                            type="text" 
                            className="signUp__middleName__input" 
                            value={middleName} 
                            onChange={ (e)=> setMiddleName(e.target.value)}
                        />

                        <h5>Username</h5>
                        <input 
                            type="text" 
                            className="signUp__username__input" 
                            value={username} 
                            required
                            onChange={ (e)=> setUsername(e.target.value)}
                        />

                        <h5>Email</h5>
                        <input 
                            type="email" 
                            className="signUp__email__input" 
                            value={email} 
                            required
                            onChange={ (e)=> setEmail(e.target.value)}
                        />

                        <h5>Password</h5>
                        <input 
                            type="password" 
                            className="signUp__password__input" 
                            value={password} 
                            required
                            onChange={ (e)=> setPassword(e.target.value)}
                        />

                        <h5>Phone NUmber</h5>
                        <input 
                            type="text" 
                            className="signUp__phoneNumber__input" 
                            value={phoneNumber} 
                            required
                            onChange={ (e)=> setPhoneNumber(e.target.value)}
                        />
                        <h5>Role</h5>
                        <input 
                            type="text" 
                            className="signUp__role__input" 
                            value={role} 
                            required
                            onChange={ (e)=> setRole(e.target.value)}
                            
                        /> <br />

                        <button 
                            type='submit'
                            className='signUp__button'> 
                            Create Account
                        </button>

                        <div className="signUp__footer">
                            <h5> Already have an account? </h5>
                            <a
                                href='/signin'
                                className="login__link"     
                                > <strong> Log in </strong>
                            </a>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}





export default SignUp