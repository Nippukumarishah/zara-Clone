import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Help = () => {
  return (
    <>
    <div style={{ width: "75%", margin: 'auto', paddingTop: "150px", cursor: "pointer"}}>
        <h3>ALL HELP TOPICS</h3>
        <div className="helppage1">
            <Link to="/login" style={{textDecoration: "none", color: "black"}}>
                <div className="helppage2">
                   
                    <h4>MY ZARA ACCOUNT</h4>
                    <p>REGISTRATION AND LOG IN</p>
                    <p>MANAGING MY PROFILE</p>
                    <p>MY FAVOURITES</p>
                </div>
            </Link>
            <Link to="/" style={{textDecoration: "none", color: "black"}}>
                <div className="helppage2">
                    <h4>ITEMS AND SIZES</h4>
                    <p>ITEMS AVAILABILITY</p>
                    <p>WHAT'S MY SIZE?</p>
                    <p>COMPOSITION AND CARE</p>

                </div>
            </Link>
            <Link to="/" style={{textDecoration: "none", color: "black"}}>
                <div className="helppage2">
                    <h4>GIFT OPTIONS</h4>
                    <p>GIFT CARD</p>
                </div>
            </Link>
            <Link to="/" style={{textDecoration: "none", color: "black"}}>
                <div className="helppage2">
                    <h4>SHIPPING</h4>
                    <p>SHIPPING METHODS TIMES AND COSTS</p>
                    <p>ORDERS IN SEVERAL SHIPMENTS</p>
                    <p>WHERE DO WE SHIP?</p>
                </div>
            </Link>
            <Link to="/payment" style={{textDecoration: "none", color: "black"}}>
                <div className="helppage2">
                    <h4>PAYMENTS AND INVOICES</h4>
                    <p>PAYMENT METHODS</p>
                    <p>PAYMENT SECURITY</p>
                    <p>INVOICES</p>
                </div>
            </Link>
            <Link to="/" style={{textDecoration: "none", color: "black"}}>
                <div className="helppage2">
                    <h4>MY PURCHASES</h4>
                    <P>ONLINE SHOPPING</P>
                    <P>ORDER STATUS</P>
                    <P>CHANGE OR CANCEL AN ONLINE ORDER</P>
                </div>
            </Link>
            <Link to="/" style={{textDecoration: "none", color: "black"}}>
                <div className="helppage2">
                    <h4>EXCHANGES, RETURNS AND REFUNDS</h4>
                    <p>HOW TO RETURN</p>
                    <p>HOW TO EXCHANGE</p>
                    <p>REFUNDS</p>
                </div>
            </Link>
            <Link to="/" style={{textDecoration: "none", color: "black"}}>
                <div className="helppage2">
                    <h4>ZARA EXPERIENCES</h4>
                    <p>OUR USED CLOTHING COLLECTION<br/>PROGRAMME</p>
                    <p>STORE MODE IN THE APP</p>
                    <p>NEWSLETTER</p>
                </div>
            </Link>
        </div>

    </div>
    <Footer />
      
    </>
  )
}

export default Help
