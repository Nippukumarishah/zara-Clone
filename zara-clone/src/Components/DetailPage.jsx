import { useNavigate, useParams } from 'react-router-dom';
import './StyleCss/Detail.css';
import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { AuthContext } from '../CartContext/AuthContext'
import axios from "axios";

function DetailPage(){
const {id } = useParams();

const [user, setUser] = useState([]);
const {getData, cartCount, setCartCount, total, setTotal} = useContext(CartContext);
const navigate = useNavigate();
const {Auth} = useContext(AuthContext);

setUser(axios.get(`https://zaraclone.herokuapp.com/mens/${id}`)
.then((res) => res.data))
console.log(user, "user");
return(
    <>
    <div style={{ display: "flex", gap: "20px", padding: "40px"}}>
        <div style={{width: "300px"}}>
            <h5>MATERIALS, CARE AND ORIGIN</h5>
            <p style={{scrollBehavior: "smooth"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus itaque harum qui eos, quos corrupti cum autem suscipit nam perspiciatis minima excepturi cupiditate delectus asperiores doloremque eius maiores mollitia accusantium!</p>

        </div>
        <div style={{display: "flex", flexDirection: "column", margin: "auto"}}>
            <div className="detail_div">
                <img src={user[0].image} alt="" className="detail_img" />
                <span>{user[0].name}</span>
                <span>Price: {user[0].price}</span>
                {Auth ? <button>
                    Add to Cart</button>
                : <button onClick={(e) => {alert("login or register before proceed to cart"); navigate('/login')
            }}>Add to Cart</button> }
            </div>
        </div>
    </div>
    </>
)
}
export default DetailPage;


