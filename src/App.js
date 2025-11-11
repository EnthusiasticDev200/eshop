import React from 'react'
import './App.css'
import Home from "./components/Home/Home.js"
import Checkout from './components/Checkout/Checkout.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './usersAction/SignIn.js';
//import {ContextProvider} from './context'; //jeph code
// import { StateProvider } from './dataLayer/StateProvider';
// import reducer, { initialState } from './dataLayer/reducer';


function App() {
  return (
    <div className="App">
        {/* <ContextProvider> */}
       
            <Router>
              <Routes>
                    {/* checkout path */}
                  <Route path='/checkout' element={<Checkout/>} />

                  <Route path='/' element={<Home/>} />
                  <Route path='/signin' element={<SignIn/>} />
              </Routes>
          </Router>
        {/* </ContextProvider> */}
        
          
    </div>
  );
}

export default App;
