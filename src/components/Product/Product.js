import React from 'react'
import "./Product.css"


function Product({id, title, price, rating, image}) {
    return (
        <div>
            <div className="product">
                <div className="product__info">
                    <p className='product__title'> Item: {title} </p>
                    <p className="product__price">#{price}</p>
                    <div className="product__rating">
                        {/* create new Array, pass rating, fill it and mao each */}
                       {Array(rating) 
                       .fill()
                       .map((_,i)=>{ 
                          return <p key={i}>⭐</p>
                       })}
                    </div>

                    <img src={image} alt="" className="product__image" /> <br/>
                    <button className='product__basketLink'>
                        <a href='default.asp'>
                            Add to Basket
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}









export default Product