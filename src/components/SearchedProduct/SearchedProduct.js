import React from "react";
import "./SearchProduct.css"
import Header from "components/Header/Header";
import AdBanner from "../../images/searchedProductImageAds.webp"

function SearchedProduct(){

    return(
        <div className="searched__product__home">
            <div className="searched__product__home__container">
                <Header/>
                <img src={AdBanner} alt="" className="searched__product__ads"/>
                <div className="searched__product__display__container">
                    <div className="searched__product__display">
                        <h4>Your searched product : </h4>
                        <img />
                        <h5>product title</h5>
                        <h5> product price</h5>
                        <button> Add to basket</button>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default SearchedProduct