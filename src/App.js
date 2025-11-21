import React, { useState, useEffect } from 'react'
import './App.css'
import Home from "./components/Home/Home.js"
import Checkout from './components/Checkout/Checkout.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './usersAction/SignIn.js';
import SignUp from './usersAction/SignUp.js'
import CreateProduct from 'components/Product/CreateProduct';
import SearchedProduct from 'components/SearchedProduct/SearchedProduct';

import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore"
import { db, auth } from "./firebaseAuth/authConfig" 

import UserContext from 'context/userContext';
import SearchedProductContext from 'context/searchedProductContext';


function App() {
  const [ user, setUser ] = useState(null) // context for user's
  
  const [ product, setProduct ] = useState(null) //context for product
  //reload user on refresh
  useEffect( ()=>{
    onAuthStateChanged(auth, async(currentUser)=>{
      if (!currentUser){
        setUser(null)
        return
      }
      const snap = await getDoc(doc(db, "users", currentUser.uid))
      setUser({
        username : snap.data().username
      } )
    
    })
  }, [])

  return (
    <div className="App">
      <SearchedProductContext value={{ product, setProduct}}> 
      <UserContext value={ { user, setUser } }>
        <Router>
              <Routes>
                    {/* checkout path */}
                  <Route path='/checkout' element={<Checkout/>} />

                  <Route path='/' element={<Home/>} />
                  <Route path='/signin' element={<SignIn/>} />
                  <Route path='/signup' element={<SignUp/>} />
                  <Route path='/create/product' element={<CreateProduct/>}/>
                  <Route path='/search/product' element={<SearchedProduct/>}/>
              </Routes> 
        </Router>  
      </UserContext>
      </SearchedProductContext>
             
    </div>
  );
}

export default App;
