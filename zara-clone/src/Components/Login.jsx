import React, { useContext, useState } from 'react';
import "./StyleCss/Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../CartContext/AuthContext';
import Footer from './Footer';


function Login ({log}) {
const navigate = useNavigate();
const [formData, setFormData] = useState({})
const {Auth, setAuth} = useContext(AuthContext);
const handleChange =(e) => {
    const {name, value} = e.target
setFormData({
    ... formData,
    [name]: value,
})
}
async function handleSubmit(e){
    e.preventDefault()
    try {
        const res = await fetch("https://zaraclone.herokuapp.com/login",{
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        let data = await res.json()
        console.log(data.token);
        if(data.status){
            localStorage.setItem("userdata", JSON.stringify(data.user))
            localStorage.setItem("token", data.token)
            navigate("/Home");
            setAuth(true);
            console.log("userdata", data.user)
        }
        else{
            alert(data.message)
        }
    } catch (error) {
        console.log(error);
        
    }
}
return(
    <>
    <form onSubmit={handleSubmit} className="container-login">
        <div className="left-login-form">
            <h3 className="login-heading">LOG IN TO YOUR ACCOUNT</h3>
            <div className="input-text-box">
                <input type="text" className="input-text" id="fname" name="email" placeholder='E-MAIL' onChange={handleChange} />
            </div>
            <div className="input-text-box">
                <input type="password" id="fName" onChange={handleChange} name='password' placeholder='PASSWORD' style={{outline: "none", border: "none"}}/>
            </div>
            <button className="login-btn">LOG IN</button>
            <a href="#" className="forgotPassword">Have you forgotten your password?</a>
       
        </div>
        <div className="right-login-form">
            <h4>NEED AN ACCOUNT?</h4>
           <Link to="/signUp" className='register-btn' type='button'>REGISTER</Link>
        </div>
    </form>
    <Footer />
    </>
)
}
export default Login