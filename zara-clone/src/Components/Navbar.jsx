import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../CartContext/AuthContaxtProvider";
import { CartContext } from "../CartContext/CartContextProvider";
import "../Components/StyleCss/Navbar.css";
function Navbar({ name }) {
const { Auth } = useContext(AuthContext);
const navigate = useNavigate();
const { cartCount } = useContext(CartContext);


    return (
<>

<div className="Nav-container">
    <div className="nav-left">
        <div className="first-nav-btn">
            <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">☰</button>
        </div>
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
           <div class="offcanvas-header">
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div> 
            <div className="offcanvas-body">
                <div>
                    <div className="inner-slide-btn">
                        <Link to="/WomenData" className="inner-slide-link-btn">WOMEN</Link>
                        <Link to="/LinenPage" className="inner-slide-link-btn">MEN</Link>
                        <Link to="/KidsData" className="inner-slide-link-btn">KIDS</Link>
                        
                    </div>
                <div className="slide-page-link-btn">
                    <Link to="/LinenPage" className="inner-slide-link-btn"><li>/// NEW</li></Link>
                    <Link to="/LinenPage" className="inner-slide-link-btn"><li>CLARKS</li></Link>
                    <Link to="/WomenData" className="inner-slide-link-btn"><li>BEST SELLERS</li></Link>
                    <Link to={"/LinenPage"} className='inner-slide-link-btn'><li>LINEN</li></Link>
                    <Link to={"/PoloPage"} className='inner-slide-link-btn'><li>POLO SHIRTS</li></Link>
                    <Link to="/LinenPage" className="inner-slide-link-btn"><li>BLAZERS</li></Link>
                    <Link to="/" className="inner-slide-link-btn"><li>JACKETS</li></Link>
                    <Link to="/LinenPage" className="inner-slide-link-btn"><li>WAISTCOATS</li></Link>
                    <Link to="/" className="inner-slide-link-btn"><li>DRESSES</li></Link>
                    <Link to="/LinenPage" className="inner-slide-link-btn"><li>SKIRTS</li></Link>
                    <Link to="/LinenPage" className="inner-slide-link-btn"><li>CARDIGANS | SWEATERS</li></Link>
                    <Link to="/LinenPage" className="inner-slide-link-btn"><li>TOPS | BODYSUITS</li></Link>
                    <Link to="/KidsData" className="inner-slide-link-btn"><li>SHIRTS</li></Link>
                    <Link to="/LinenPage" className="inner-slide-link-btn"><li>T-SHIRTS</li></Link>
                    <Link to="/" className="inner-slide-link-btn"><li>JEANS</li></Link>
                    <Link to="/" className="inner-slide-link-btn"><li>TROUSERS</li></Link>
                    <Link to="/" className="inner-slide-link-btn"><li>SHOES</li></Link>
                    <Link to="/" className="inner-slide-link-btn"><li>KNITWEAR</li></Link>
                    <Link to="/" className="inner-slide-link-btn"><li>SWEATSHIRTS</li></Link>
                    <Link to="/" className="inner-slide-link-btn"><li>TRENCH | COATS</li></Link>
                    <Link to="/" className="inner-slide-link-btn"><li>SHORTS | SKORTS</li></Link>
                    <Link to="/" className="inner-slide-link-btn"><li>BAGS</li></Link>
                    <Link to="/" className="inner-slide-link-btn"><li>ACCESSORIES | JEWELLERY</li></Link>
                    <Link to="/" className="inner-slide-link-btn"><li>PERFUMES</li></Link>
                    <Link to="/" className="inner-slide-link-btn"><li>MAKEUP</li></Link>
                    <Link to={"/product"} className="inner-slide-link-btn"><li>BASICS</li></Link>
                    <Link to="/LinenPage" className="inner-slide-link-btn"><li>CO-ORD SETS</li></Link>
                    <Link to="/" className="inner-slide-link-btn"><li>TRACKSUITS</li></Link>
                    <Link to="/" className="inner-slide-link-btn"><li>SPECIAL PRICES</li></Link>
                </div>
                </div>
            </div>
        </div>
    </div>

    <div className="logo-nav">
        <Link to="/home" className="logo-image">
            <img 
            width="100%"
            height="100%"
            src="https://cdn.cookielaw.org/logos/5435e8e3-1f77-4efd-bb7e-591b5a6e876e/d7899571-c1e4-4d71-8e87-09246e838e5d/d5b1d450-62b7-4f62-94ba-f9835c6495ed/Standard.png" alt="title" />
        </Link>
    </div>
</div>
<div className="nav-right">
    <div className="right">
        <input className="nav-search" placeholder="Search"/>
        <button className="btn-1" type='button'>
            {!Auth ? <Link to="/login">Login</Link> :
           <div style={{
            width:"fitContent",
            backgroundColor: "white",
            color:"black",
            border:"none"
           }}>
            <span>Hi !! {name} </span>
           </div> }
        </button>
        <Link to="/help"><button className="btn-1" type="button">Help</button></Link>
        
        {Auth ? <button className="btn-1" type="button"
        onClick={() => navigate('/cart')}
    >CART:- {cartCount}</button>
:
<button className="btn-1" type="button" 
onClick={() =>{
    alert("Please Login or Create New Account")
    navigate('/login')}}>SHOPPING BAG {cartCount}</button>
}
    </div>
</div>





</>
    )
}
export default Navbar;