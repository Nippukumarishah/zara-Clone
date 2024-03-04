import './StyleCss/CardPayment.css';
import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext'
import { useNavigate } from 'react-router-dom';
function CardPayment(){
    const {total}= useContext(CartContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        cardNumber: "",
        month:"",
        year: "",
        cardHolder:"",
        cvv: "",
    })
    const handleChange =(e) =>{
        const {name, value} = e.target
        setUser ({
            ...user,
            [name]: value
        })
    }

    const purchase =() => {
        const {cardNumber, month, year, cardHolder,cvv} = user
        if((cardNumber && month && year && cardHolder && cvv)){
            alert("purchase successfull");
            navigate("/Home")
        }
        else{
            alert("fill the all details")
        }
    }
return(
    <>
    <div>
        <div className="card-details-container">
            <h3 className="ha2">ENTER YOUR CARD DETAILS</h3>
            <img 
            class="img"
            src="https://static.zara.net/static/images/payment/payment/icon-payment-visa.svg" alt="" />

            <form action="" className="card-detail">
                <input type="number" name="cardnumber" value={user.cardNumber} onChange={handleChange} placeholder='CARD NUMBER' />
                <input type="month" name="month" value={user.month} onChange={handleChange} placeholder="MONTH"/>
                <input type="text" name="year" value={user.year} onChange={handleChange} placeholder='YEAR'/>
                <br/>

                <input type="text" className='card-holder-input' name="cardholder" value={user.cardHolder} onChange={handleChange} placeholder='CARD HOLDER'/>
                <input type="text" name="cvv" value={user.cvv} onChange={handleChange} placeholder='CVV SECURITY CODE' />
            </form>

          </div>
          <div className="cards">
            <div className="pr">
                <div className="price">
                    TOTAL : <span>{total}</span>
                </div>
                <button onClick={purchase}>CONTINUE</button>
            </div>
          </div>
    </div>
    </>
);
}
export default CardPayment;