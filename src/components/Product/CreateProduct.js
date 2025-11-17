import "./CreateProduct.css"

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront';


function CreateProduct(){
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')


    console.log(title, price)

    const newProduct = async (e) =>{
        e.preventDefault()
        if( !title || !price){
            alert ("Fields cannot be omitted")
        }
        try{
            const url = process.env.REACT_APP_CREATE_PRODUCT_API
            const response = await fetch(url,{
                method : 'POST',
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify({title, price})
            })
            console.log("response", response)
            const data = await response.json()
            console.log("data", data)
            alert("Product created successfully")
            return data
        }catch(error){
            console.log("Error creating product", error)
            alert("Product creation failed")
        }
    }

    return (
        <div className="create__product">
            <div className="create__product__container">

                <Link to="/" style={{textDecoration : "none"}}>
                    <div className="create__product__logo">
                        <StorefrontIcon className='create__product__logo__image'/>
                        <h2 className='create__product__title'>eShop </h2>
                    </div>
                </Link>
                <div className="create__productn__form">
                    <h3> New Products</h3>

                    <form onSubmit={newProduct}>
                        <h5>Product Name</h5>
                        <input 
                            type="text" 
                            className="create__product__title__input" 
                            value={title} 
                            onChange={ (e)=> setTitle(e.target.value)}/>

                        <h5>Price</h5>
                        <input 
                            type="number" 
                            className="create__product__price__input" 
                            value={price} 
                            onChange={ (e)=> setPrice(e.target.value)} /> <br />

                        <button 
                            type='submit'
                            className='create__product__button' 
                            > Create
                        </button>
                    </form>
                </div>

            </div>

        </div>
    )
}






export default CreateProduct