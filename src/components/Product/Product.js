import React from 'react'
import "./Product.css"
import { useStateValue } from "../../dataLayer/StateProvider"

function Product({id, title, price, rating, image}) {

    // use the tut context API here
    const [ dispatch ] = useStateValue(); //. Removed state. dispatch is same as action in reducer
    

    const addToBasket = () =>{
        dispatch({
            type : "ADD_TO_BASKET",
            item : { //product data we want to pass
                id : id,
                title : title,
                image : image,
                price : price,
                rating : rating
            }
        })
    }
        
    
    return (
        <div>
            <div className="product">
                <div className="product__info">
                    <p className='product__title'> Item: {title} </p>
                    <p className="product__price">${price}</p>
                    <div className="product__rating">
                        {/* create new Array, pass rating, fill it and mao each */}
                       {Array(rating) 
                       .fill()
                       .map((_,i)=>{ 
                          return <p key={i}>⭐</p>
                       })}
                    </div>

                    <img src={image} alt="" className="product__image" /> <br/>
                    <button className='product__basketLink' onClick={addToBasket}>
                            Add to Basket
                    </button>
                </div>
            </div>
        </div>
    )
}









export default Product