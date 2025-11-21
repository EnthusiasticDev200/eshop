import React, { useState, useContext } from "react"
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useNavigate } from "react-router-dom"
import { useStateValue } from "../../dataLayer/StateProvider";

import UserContext from "context/userContext";
import SearchedProductContext from "context/searchedProductContext";

function Header(){
    const [ {basket}, dispatch ] = useStateValue() // removed dispatch
    const [ searchProduct, setSearchProduct] = useState('')

    const { user } = useContext(UserContext) //use context with updaated info from SignIn comp

    const { setProduct } = useContext(SearchedProductContext)

    const navigate = useNavigate()


    const getProduct = async(e) =>{
        e.preventDefault()
        if ( !searchProduct ){
            alert ("your input is empty")
            return
        }
        //hit db
        const url = process.env.REACT_APP_GET_PRODUCT
       
        try{
            const response = await fetch(`${url}`+`${searchProduct}`, {
                method : 'GET'
            })
            console.log("getting product", response)
            if ( response.status !== 200) return alert(" product not found")
            const data = await response.json()
            console.log("data", data)

            //update global data set
            setProduct({
                id : data._id,
                title : data.title,
                price : data.price,
                imageUrl : data.imageUrl
            })
            navigate('/search/product') 
        }catch(error){
            console.log("error pulling product", error.message)
            alert("error fecthing product")
        }
    }
    
    
    return (
        <div className="parent__header">
                {/* headers comp. logo&searchBar&Nav */ }
                
                {/* path to home */}
            <Link to="/" style={{ textDecoration : "none"}} >
                <div className="header__logo">
                    <StorefrontIcon  className="header__logoImage" fontSize="large" />
                    <h2 className='header__logo_Title'> eShop</h2>
                </div>
            </Link>
            
        
            <div className="header__searchBar">
                <form onSubmit={getProduct}>
                    <input 
                        type='text' 
                        className='header__searchInput' 
                        placeholder="search product"
                        value ={searchProduct}
                        onChange={(e)=> setSearchProduct(e.target.value)}/>
                    <button
                        type="submit"
                        className="header__searchIcon__btn">
                        <SearchIcon className='header__searchIcon'/>
                    </button>
                </form>
            </div>

            <div className="header__nav">
                <div className="nav__item">
                    <span className="nav__item__lineOne">{
                        //display username if logged in
                        user ? `Hello ${user.username}` : "Hello Guest"
                        }</span>
                    <Link to="signin" style={{ textDecoration : "none"}}>
                        <span className="nav__item__lineTwo">
                            { user ? <>Sign Out</> : <>Sign In</> }
                        </span>
                    </Link>
                    
                </div>

                <div className="nav__item">
                    <span className="nav__item__lineOne">Your</span>
                    <span className="nav__item__lineTwo">Shop</span>
                </div>

                {/* path to checkout */}
                <Link to="/checkout" style={{ textDecoration : "none"}}>
                    <div className="nav__item">
                        <ShoppingBasketIcon className="basketIcon" />
                        <span className="nav__item__lineTwo">{basket.length}</span>
                    </div>
                </Link>
                
        
            </div>
        </div>
    )
}


export default Header