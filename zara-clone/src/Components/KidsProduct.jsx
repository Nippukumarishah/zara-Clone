import React, { useEffect, useState } from 'react'
import './StyleCss/KidsProduct.css'
import { Link } from '@mui/material';

const KidsProduct = () => {
    const [kidsData, setKidsData] = useState([]);

    useEffect(()=> {
        getKidsItem();
    },[]);

    async function getKidsItem(){
        try {
            const kids = await fetch("https://zaraclone.herokuapp.com/kidsData");
            const data = await kids.json()
            setKidsData(data);
        } catch (error) {
           console.log(error) 
        }
    }
  return (
    <div className='main_kids_tri'>
        <div className="render_data_kids">
            {kidsData.map((elem) => (
                <Link to={`/kidsData/${elem.id}`}>
                    <div key={elem.id}>
                    <img src={elem.image} alt="" className="kids_image" />
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

export default KidsProduct

