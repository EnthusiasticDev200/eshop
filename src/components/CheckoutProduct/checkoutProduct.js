import React from "react";
import "./CheckoutProduct.css"

import { useStateValue } from "../../dataLayer/StateProvider";


function CheckoutProduct({id, title, image, price, rating}){
    const [ { basket }, dispatch ] = useStateValue() // where is basket coming from??
    
    const removeFromBasket = () =>{
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id : id
        })
    }
    return(
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProd__image"/>
            <div className="checkoutProduct__titile">{ title }  </div>
            <p className="checkoutProd__price">${ price }</p>

            <div className="checkoutProd__rating"> 
                {Array(rating) 
                       .fill()
                       .map((_,i)=>{ 
                          return <p key={i}>⭐</p>
                       })}
            </div>

            <button onClick={removeFromBasket}> Remove from Basket</button>

        </div>
    )
}







export default CheckoutProduct
