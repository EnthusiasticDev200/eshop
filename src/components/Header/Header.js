import React from "react"
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom"


function Header(){
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
                <input type='text' className='header__searchInput' placeholder="search product"/>
                <button>
                    <SearchIcon className='header__searchIcon'/>
                </button>
            </div>

            <div className="header__nav">
                <div className="nav__item">
                    <span className="nav__item__lineOne">Hello Guest</span>
                    <span className="nav__item__lineTwo">Sign In</span>
                </div>

                <div className="nav__item">
                    <span className="nav__item__lineOne">Your</span>
                    <span className="nav__item__lineTwo">Shop</span>
                </div>

                {/* path to checkout */}
                <Link to="/checkout" style={{ textDecoration : "none"}}>
                    <div className="nav__item">
                        <ShoppingBasketIcon className="basketIcon" />
                        <span className="nav__item__lineTwo">0</span>
                    </div>
                </Link>
                
        
            </div>
        </div>
    )
}


export default Header