import React from 'react'
import "./Home.css"
import Product from "../Product/Product.js"
import Img from '../../images/shopping-supermarket-295711.webp'
import AirJord from "../../images/black-jordan-13-shoes.jpeg"
import honey from "../../images/honey 250ml.jpg"
import threeIn1 from "../../images/3in1 NitRinz.jpg"
import sheaBut from "../../images/sheaButterCoconut.jpg"
import tshirt from "../../images/orangeRoundNeck.jpg"
import samsungS9 from "../../images/samsung s9.jpg"


function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    {/* homePage image */}
                    <img src={Img} 
                        alt="" className='home__image'/>

                    {/* product display */}
                    <div className="home-row-two">
                        <Product  
                            id="1"
                            title="Air Jordan"
                            price={5000}
                            rating={5}
                            image={AirJord}    
                        />

                        <Product 
                            id="2"
                            title="Pure Natural Honey"
                            price={6000}
                            rating={5}
                            image={honey}   
                        />
                    </div>

                    <div className="home-row-three">
                        <Product 
                            id="3"
                            title="Shea Butter and Coconut Oil"
                            price={8000}
                            rating={5}
                            image={threeIn1}   
                        />
                        <Product 
                            id="4"
                            title="Shea butter"
                            price={4000}
                            rating={5}
                            image={sheaBut}   
                        />
                        <Product 
                            id="5"
                            title="Tshirt"
                            price={4500}
                            rating={5}
                            image={tshirt}   
                        />
                    </div>

                    <div className="home-row-one">
                       <Product 
                            id="6"
                            title="Samsung s9 phone"
                            price={150000}
                            rating={4}
                            image={samsungS9}   
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Home

