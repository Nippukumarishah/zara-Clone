import React from 'react';
import styled from 'styled-components';

function Footer() {
    return(
    <Container className='footer'>
       
    <div className="footer_display">
        <div>
        <h4>HELP</h4>
        <a href="#">MY ZARA ACCOUNT</a>
        <a href="#">ITEMS AND SIZES</a>
        <a href="#">GIFT OPTIONS</a>
        <a href="#">SHIPPING</a>
        <a href="#">PAYMENT AND INVOICES</a>
        <a href="#">EXCHANGES, RETURNS AND REFUNDS</a>
        <a href="#">ZARA EXPERIENCIES</a>
        </div>
        <div>
            <h4>FOLLOW US</h4>
            <a href="#">NEWSLETTER</a>
            <a href="#">INSTAGRAM</a>
            <a href="#">FACEBOOK</a>
            <a href="#">PINTEREST</a>
            <a href="#">YOUTUBE</a>
        </div>
        <div>
            <h4>COMPANY</h4>
            <a href="#">ABOUT US</a>
            <a href="#">JOIN LIFE</a>
            <a href="#">OFFICES</a>
            <a href="#">STORES</a>
            <a href="#">WORK WITH US</a>
        </div>
        <div>
            <h4>POLICIES</h4>
            <a href="#">PRIVACY POLICY</a>
            <a href="#">PURCHASE CONDITIONS</a>
            <a href="#">GIFT CARD CONDITIONS</a>
            <a href="#">COOKIES SETTINGS</a>
        </div>
</div>

<div className="language_cookies_setting">
    <div>INDIA</div>
    <div>ENGLISH  © ALL RIGHTS RESERVED</div>
</div>

<div className="footer_bottom">
    <div>
        <p>NAME AND ADDRESS OF THE MANUFACTURER:</p>
        <p>INDUSTRIA DE DISENO TEXTIL, S.A (INDITEX. S.A)</p>
        <p>AVENIDA DE LA DIPUTACIÓN, EDIFICIO INDITEX, 15143, ARTEIXO (A CORUÑA), SPAIN</p>
    </div>
</div>

    </Container>
    )
}

const Container = styled.div`
width:90%;
margin: auto;
display: flex;
flex-direction:column;
gap:20px;
font-size:11px;
margin-bottom:50px;
line-height:20px;
margin-top:50px;

.footer_display{
    display:flex;
    align-items:flex-start;
    gap: 30px
}
.language_cookies_setting{
    display:flex;
    gap:20px;
}
`
export default Footer;