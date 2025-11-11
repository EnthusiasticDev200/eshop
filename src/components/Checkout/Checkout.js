import React from 'react'
import "./Checkout.css"
import Header from '../Header/Header'
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct"
import adImage from "../../images/advert image.png"
import SubTotal from '../Subtotal/SubTotal'

import { useStateValue } from '../../dataLayer/StateProvider'

function Checkout() {
    const [{ basket } ] = useStateValue() // removed dispatch

    return(
        <div>
            <Header/>
            <div className="parent__checkout">
                <img src={adImage} alt="" className='checkout__adImage'/>
                <div className="adsAnd__checkoutProduct">
                    <h2> Your Shopping Basket</h2>
                    {basket.map(item=>{
                         return <CheckoutProduct
                            id = { item.id }
                            title= { item.title }
                            image= { item.image }
                            price= { item.price }
                            rating= { item.rating}
                        />
                    })}
                   
                </div>

                <div className="checkout__info">
                    <SubTotal/> 
                </div>



            </div>
        </div>
    )
}


export default Checkout


























