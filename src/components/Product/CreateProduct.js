import "./CreateProduct.css"

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront';


function CreateProduct(){
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(null)


    const newProduct = async (e) =>{
        e.preventDefault()

        let imageUrl = ''
        if( !title || !price || !image){
            alert ("Fields cannot be omitted")
            return // needed to make append work
        }
        //append data 
        const imageData = new FormData()
        
        imageData.append("file", image)

        try{
            const url = process.env.REACT_APP_CREATE_PRODUCT_IMAGE_URL
        
            const sendfile = await fetch(url,
                {   
                    method : 'POST',
                    body: imageData
                }
            )
           
            const uploadedImg= await sendfile.json()
            imageUrl = uploadedImg
        }catch(error){
            console.log("error sending file to cloudinary", error)
            alert("failed sending file to cloudinary")
            return
        }

        try{
            const url = process.env.REACT_APP_CREATE_PRODUCT_API

            const response = await fetch(url,{
                method : 'POST',
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify({title, price, imageUrl}),   
            })
            
            if (response.status === 404 ){
                alert(" product creation failed")
                return
            }
            const data = await response.json()
            
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
                    <h3> New Product</h3>

                    <form onSubmit={newProduct}>
                        <h5>Product Name</h5>
                        <input 
                            type="text" 
                            className="create__product__title__input" 
                            value={title} 
                            required
                            onChange={ (e)=> setTitle(e.target.value)}/>

                        <h5>Price</h5>
                        <input 
                            type="number" 
                            className="create__product__price__input" 
                            value={price} 
                            required
                            onChange={ (e)=> setPrice(e.target.value)} />
                            
                        <h5>Image</h5>
                        <input 
                            type="file" 
                            className="create__product__image__input" 
                            // value={image}
                            required 
                            onChange={ (e)=> setImage(e.target.files[0])} /> <br />

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