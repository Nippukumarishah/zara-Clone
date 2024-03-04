import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./StyleCss/PoloShirt.css"

const PoloShirt = () => {
    const [polo, setPolo] = useState([]);

    useEffect(() =>{
        axios.get(`http://localhost:8080/product`).then((res) => {
            setPolo(res.data);

        });
    },[])
  return (
    <div className='main_poloShirt_tri'>
        <div className="render_data_polo">
            {polo.map((elem) => (
                <Link to={`/Polo_shirt/${elem.id}`}>
                    <div>
                        <img src={elem.image} alt="" className="polo_img" />
                        <div className="span_div">
                            <p>{elem.name}</p>
                            <p>Price: ₹{elem.price}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      
    </div>
  )
}

export default PoloShirt
