import React, { useState } from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront';

// import Header from '../components/Header/Header'; 


function SignIm (){
    const [ email, setEmail ] = useState('')
    const { password, setPassword } = useState('')
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
                    <h3> Please sign in</h3>
                    <form action="">
                        <h5>Email</h5>
                        <input type="text" className="email__input" value={email} onChange={e=> setEmail(e.target.email)}/>

                        <h5>Password</h5>
                        <input type="password" className="password__input" value={password} onChange={e=> setPassword(e.target.password)} /> <br />
                        <small className='remember__me'>
                            <input type="checkbox" /> Remember Me
                        </small> <br />
                        <button type='submit'className='signIn__button'> Login in</button>

                        <div className="signUp__form">
                            <h5> Don't have an account? </h5>
                            <a href=''className="create__account__link" >Create account</a> 
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}





export default SignIm