import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../CartContext/CartContextProvider';
import { AuthContext } from '../../CartContext/AuthContaxtProvider';
import { Link } from "react-router-dom";
import Login from "../Login";
import "../StyleCss/Detail.css";

function Cart(){
    const [cartData, setCardData] = useState([]);

    const {cartCount, setCartCount, total, setTotal} = useContext(CartContext);

    const {Auth, setAuth} = useContext(AuthContext);

    useEffect(()=>{
        getData();
    },[])




}

let token = localStorage.getItem("token")

async function getData() {
    try {
        let res = await fetch("https://zaraclone.herokuapp.com/carts" , {
            method: "GET",
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
      let  data = await res.json();
        console.log(data);

        let sum=0;
        for(let i = 0; i < data.length; i++){
            sum = sum+ data[i].price
        }
setCartData(data);
setTotal(sum);
setCartCount(data.length)

    } catch (error) {
        console.log(error);
    }

const handleDelete = async(user) => {
    try {
        let resp = await fetch(`https://zaraclone.herokuapp.com/carts/${user._id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
        getData();
    } catch (error) {
        console.log(error);
    }
    if(cartCount > 0) {
        setCartCount(cartCount - 1)
        setTotal((prev) => prev - Number((user.price)));
    }
}

return (
    <>
    {Auth ? <div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(2,450px)", gridTemplateRows: "repeat(200px)", justifyContent: "space-around", gap: "10px", marginTop: "20px"}}>
            {cartCount.map((user) => {
                <div key={user.id} style={{display: "flex", gap: "10px"}}>
                    <img className="detail_img" src={user.image} alt="" />
                    <div style={{display: "flex", gap:"10px", flexDirection: "column"}}>
                        <p>{user.name}</p>
                        <p>Price: {user.price}</p>
                        <button onClick={()=>handleDelete(user)}>DELETE</button>
                    </div>
                </div>
            })}
        </div>
        <div style={{float: "right"}}>
            <h4 style={{marginLeft: "20%"}}>Total: {total}</h4>
            <Link to={'/payment'}><button>Continue to Payment</button></Link>

        </div>
    </div> :
   <div>
    <Login />
   </div> 
   }
    </>
)
}; 
export default Cart