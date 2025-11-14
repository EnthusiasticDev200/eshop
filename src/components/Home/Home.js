import React from 'react'
import "./Home.css"
import Product from "../Product/Product.js"
import Img from '../../images/shopping-supermarket-295711.webp'

//cosmetcis and beauty
import threeIn1 from "../../images/3in1 NitRinz.jpg"
import sheaBut from "../../images/sheaButterCoconut.jpg"
import creams from "../../images/cosmetic-products-cream-tubes-essential.webp"
import creedPerf from "../../images/perfume-gallery.webp"
import sauvagePerf from "../../images/Fresh-Notes_perf.webp"

// fashion and footwear
import tshirt from "../../images/orangeRoundNeck.jpg"
import AirJord from "../../images/black-jordan-13-shoes.jpeg"
import ankara from "../../images/ankara2.webp"
import jords from "../../images/jords4.webp"
import vintageTop from "../../images/vintage.webp"

//edibles
import honey from "../../images/honey 250ml.jpg"
import cake1 from "../../images/cake-with-strawberries-strawberries.webp"
import pizza from "../../images/pepperoni-pizza-in-box.webp"
import cake2 from "../../images/loaded_cake.webp"

//accessories
import samsungS9 from "../../images/samsung s9.jpg"
import iPhone from "../../images/iphone16.webp"
import headphone1 from "../../images/headphone.webp"
import wirelessHeadPhone from "../../images/wireless_headphone.webp"
import powerBank from "../../images/power_bank1.webp"
import laptop from "../../images/lapptop3.webp"
import Header from '../Header/Header.js'


import StorefrontIcon from "@mui/icons-material/Storefront"

//import { Context } from './../../context'


function Home() {
    // const { add } = useContext(Context);
    return (
        <div>
            <div className="home">
                <Header/>
                <div className="home__container">
                    {/* homePage image */}
                    <img src={Img} 
                        alt="" className='home__image'/>

                    {/* product display */}
                    {/* cosmetics */}
                    <div className="cosmetic__products">
                        {/* <div className="home-row-three"> */}
                        <h4>Cosmetic And Beauty Products</h4>
                        <div className="cosmetic-rows">
                                <Product 
                                    id="3"
                                    title="Shea Butter, Coconut Oil & Honey"
                                    price={8000}
                                    rating={5}
                                    image={threeIn1} 
                                />
                                <Product
                                    id="4"
                                    title="Sauvage Perfume for Men"
                                    price={25000}
                                    rating={4}
                                    image={sauvagePerf}
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
                                    title="Maskara"
                                    price={3000}
                                    rating={4}
                                    image={creams}
                                />
                                <Product
                                    id="6"
                                    title="Creed perfume"
                                    price={30000}
                                    rating={5}
                                    image={creedPerf}
                                />
                        </div>
                    </div>

                    {/* fashion */}
                    <div className="fashion__products">
                        <h4> Fashion Products</h4>
                        <div className="fashion__rows">
                            <Product 
                                id="5"
                                image={tshirt}   
                                title="Tshirt"
                                price={4500}
                                rating={5}
                            />
                            <Product  
                                id="1"
                                title="Air Jordan"
                                price={5000}
                                rating={5}
                                image={AirJord}    
                            />
                            <Product
                                id="2"
                                title="Vintage"
                                price={14000}
                                rating={4}
                                image={vintageTop}
                            />
                            <Product
                                id="4"
                                title="Ankara"
                                price={4000}
                                rating={3}
                                image={ankara}
                            />
                            <Product
                                id="6"
                                title="Jord 4"
                                price={35000}
                                rating={4}
                                image={jords}
                            />

                        </div>
                    </div>

                    {/* edible */}
                    <div className="edible__products">
                        <h4>Edible Products</h4>
                        <div className="edible__rows">
                            <Product 
                                id="2"
                                title="Pure Natural Honey"
                                price={6000}
                                rating={5}
                                image={honey}   
                            />

                            <Product
                                id="3"
                                title="pizza"
                                price={7000}
                                rating={4}
                                image={pizza}
                            />

                            <Product
                                id="4"
                                title="cake"
                                price={75000}
                                rating={5}
                                image={cake2}
                            />

                            <Product
                                id="5"
                                title="Strawberrycake"
                                price={85000}
                                rating={5}
                                image={cake1}
                            />

                        </div>
                    </div>

                    {/* gadgets and accessories */}
                    <div className="accessory__products">
                        <h4> Gadgets and Accessories</h4>
                        <div className="accessories__rows">
                            <Product 
                                id="6"
                                title="Samsung s9 phone"
                                price={150000}
                                rating={4}
                                image={samsungS9}   
                            />
                             <Product 
                                id="6"
                                title="Wireless Headphone"
                                price={15000}
                                rating={5}
                                image={wirelessHeadPhone}   
                            />
                             <Product 
                                id="6"
                                title="iPhone 16"
                                price={900000}
                                rating={4}
                                image={iPhone}   
                            />
                             <Product 
                                id="7"
                                title="Power bank"
                                price={30000}
                                rating={4}
                                image={powerBank}   
                            />
                             <Product 
                                id="9"
                                title="Laptop"
                                price={1500000}
                                rating={5}
                                image={laptop}   
                            />
                        </div>
                    </div>

                    {/* Alcoholic Bevs */}
                    <div className="beverage__products">
                        <h4> Alcoholic Bevs</h4>
                        <div className="beverage__rows">
                            <Product 
                                id="6"
                                title="Hero Lager Beer"
                                price={150000}
                                rating={4}
                                image={samsungS9}   
                            />

                            <Product 
                                id="6"
                                title="Hero Lager Beer"
                                price={150000}
                                rating={4}
                                image={samsungS9}   
                            />

                            <Product 
                                id="6"
                                title="Hero Lager Beer"
                                price={150000}
                                rating={4}
                                image={samsungS9}   
                            />

                            <Product 
                                id="6"
                                title="Hero Lager Beer"
                                price={150000}
                                rating={4}
                                image={samsungS9}   
                            />

                            <Product 
                                id="6"
                                title="Hero Lager Beer"
                                price={150000}
                                rating={4}
                                image={samsungS9}   
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <div className='footer__div'>
                <footer className="home__footer" >
                    <div className="eshop__image__and__name">
                        <StorefrontIcon  className="footer__eshop__logoImage" fontSize="large" />
                        <h6> eShop</h6>
                    </div>

                    <div className="eshop__newsletter">
                        <h6> Visiting for the first time? </h6>
                        <p className='eshop__newsletter__sub__par'> 
                            Subscribe to our newsletter to get updates on our latest offers! </p>
                        <input 
                            type="email" 
                            placeholder='Enter email address'
                            className='footer__newsletter__input'
                        />
                        <button className='footer__newsletter__btn'>
                            <a 
                            href="default.asp" 
                            className='footer__newsletter__sub'
                            target='_blank'>
                                <small> Subscribe </small>
                            </a>
                        </button>
                        
                        <div className="eshop__newsletter__checkbox_div">
                            <input 
                                type="checkbox" 
                                placeholder='Enter email address'
                            /> 
                            <p className='home__footer__par'> I agree to eShop's Privacy and Cookie Policy. You can unsubscribe 
                                from newsletters at any time.
                            </p>
                        </div>
                        

                    </div>
                    <div className="eshop__app__download">
                        <h6> Download App</h6>
                       
                    </div>
                </footer>
            </div>    
        </div>
    )
}


export default Home

