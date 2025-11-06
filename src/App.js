import React from 'react'
import './App.css';
import Header from "./components/Header/Header.js"
import Home from "./components/Home/Home.js"
import Checkout from './components/Checkout/Checkout.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                  {/* checkout path */}
                <Route path='/checkout' element={<Checkout/>} />
                  
                <Route path='/' element={<Header/> && <Home/>} />
            </Routes>
        </Router>
        
    </div>
  );
}

export default App;
