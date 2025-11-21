import React, { useContext } from "react";
import "./SearchedProduct.css"
import Header from "components/Header/Header";
import AdBanner from "../../images/searchedProductImageAds.png"
import SearchedProductContext from "context/searchedProductContext";

function SearchedProduct(){

    //use product context value
    const { product } = useContext(SearchedProductContext)

    return(
        <div className="searched__product__home">
            <div className="searched__product__home__container">
                <Header/>
                <img src={AdBanner} alt="ads banner" className="searched__product__ads"/>
                <div className="searched__product__display__container">
                    <h4 className="searched__product__text"> Search result for : { product ? product.title : "title"} </h4>
                    <div className="searched__product__display">
                        <img className="searched__product__display_image" 
                            src= { product ?  product.imageUrl : null }  />
                        <h5 className="searched__product__display_title"> { product ? product.title : "title"}</h5>
                        <h5 className="searched__product__display_price"> ₦ { product ? product.price : 0}</h5>
                        <button className="searched__product__display_btn"> Add to basket</button>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default SearchedProduct