import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Help = () => {
  return (
    <>
    <div style={{marginTop: "150px"}}>
    <img src="https://static.zara.net/photos///contents/mkt/spots/ss24-help-customer/cover-xmedia-08-north//w/1899/IMAGE-landscape-web-b134792c-1d70-4807-930d-c8d308e4e602-default_0.jpg?ts=1708588328097" alt="" />
    </div>
      <div style={{marginTop: "13%"}}>
        <h5 style={{fontSize:"17px"}}>ALL HELP TOPICS</h5>
        <div style={{ width: "85%", margin:"auto", marginTop: "20px",  display:"flex", justifyContent: "space-around", flexWrap:"wrap"}}>
       
          <Link to="/" style={{textDecoration:"none",color:"black"}}>
            <div style={{border: "2px solid black", width: "90%", margin: "20px", height: "180px"}}>
           <h6>MY ZARA ACCOUNT</h6>
           <p>REGISTRATION AND LOG IN</p>
           <p>MANAGING MY PROFILE</p>
           <p>MY FAVOURITES</p>
            </div>
          </Link>
          <Link to="/checkout" style={{textDecoration:"none",color:"black"}}>
            <div style={{border: "2px solid black", width: "90%", margin: "20px", height: "180px"}}>
            <h4>ITEMS AND SIZES</h4>
            <p>ITEMS AVAILABILITY</p>
            <p>WHAT’S MY SIZE?</p>
            <p>WHAT’S MY SIZE?</p>
            </div>
          </Link>
          <Link to="/" style={{textDecoration:"none",color:"black"}}>
            <div style={{border: "2px solid black", width: "90%", margin: "20px", height: "180px"}}>
            <h4>GIFT OPTIONS</h4>
            <p>GIFT CARD</p>
            </div>
          </Link>
          <Link to="/payment" style={{textDecoration:"none",color:"black"}}>
            <div style={{border: "2px solid black", width: "90%", margin: "20px", height: "180px"}}>
             <h4>SHIPPING</h4>
             <p>SHIPPING METHODS, TIMES AND COSTS</p>
             <p>ORDERS IN SEVERAL SHIPMENTS</p>
             <p>WHERE DO WE SHIP?</p>
            </div>
          </Link>
          <Link to="/products" style={{textDecoration:"none",color:"black"}}>
            <div style={{border: "2px solid black", width: "90%", margin: "20px", height: "180px"}}>
           <h4>PAYMENTS AND INVOICES</h4>
           <p>PAYMENT METHODS</p>
           <p>PAYMENT SECURITY</p>
           <p>INVOICES</p>
            </div>
          </Link>
          <Link to="/checkout" style={{textDecoration:"none",color:"black"}}>
            <div style={{border: "2px solid black", width: "90%", margin: "20px", height: "180px"}}>
             <h4>MY PURCHASES</h4>
             <p>ONLINE SHOPPING</p>
             <p>ORDER STATUS</p>
             <p>CHANGE OR CANCEL AN ONLINE ORDER</p>
            </div>
          </Link>
          <Link to="/checkout" style={{textDecoration:"none",color:"black"}}>
            <div style={{border: "2px solid black", width: "90%", margin: "20px", height: "180px"}}>
             <h4>EXCHANGES, RETURNS AND REFUNDS</h4>
             <p>HOW TO RETURN</p>
             <p>HOW TO EXCHANGE</p>
             <p>REFUNDS</p>
            </div>
          </Link>
          </div>
          <Footer />
        
      </div>
    </>
  )
}

export default Help