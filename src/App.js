import React from 'react'
import './App.css'
import Home from "./components/Home/Home.js"
import Checkout from './components/Checkout/Checkout.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './usersAction/SignIn.js';
import SignUp from './usersAction/SignUp.js'


function App() {
  return (
    <div className="App">
            <Router>
              <Routes>
                    {/* checkout path */}
                  <Route path='/checkout' element={<Checkout/>} />

                  <Route path='/' element={<Home/>} />
                  <Route path='/signin' element={<SignIn/>} />
                  <Route path='/signup' element={<SignUp/>} />
              </Routes> 
          </Router>   
    </div>
  );
}

export default App;
