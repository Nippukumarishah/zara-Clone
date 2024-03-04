import React, { useEffect, useState } from 'react'
import './StyleCss/Linen.css'
import { Link } from 'react-router-dom';

const LinenPage = () => {
    const [Linen, setLinen] = useState([]);

    useEffect(() => {
        linenProduct();
    },[]);

    async function linenProduct(){
        const res = await fetch("https://zaraclone.herokuapp.com/mens");

        const data = await res.json();
        setLinen(res);
    };
  return (
    <>
      <div className="main_linen_tri">
        <div className="render_data_linen">
            {Linen.map((elem) =>(
                <Link to={`Linen_data/${elem.id}`} className='cart-price'>
                    <div key={elem.id}>
                        <img src={elem.image} alt="" className="product_image_tri" />
                        <div className="subDivProduct">
                            <p>{elem.name}</p>
                            <p>Price: ₹{elem.price}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </>
  )
}

export default LinenPage
