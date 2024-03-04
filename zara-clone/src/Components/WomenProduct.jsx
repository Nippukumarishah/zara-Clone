import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './StyleCss/WomenProduct.css'

const WomenProduct = () => {

    const [womenData, setWomenData] = useState([]);

    useEffect(() =>{
        getWomenData();
    },[])

    async function getWomenData(){
       try {
        const getData = await fetch("https://zaraclone.herokuapp.com/womens");
        const data = await getData.json();
        setWomenData(data);
       } catch (error) {
        console.log.og(error)
       }
    }
  return (
    <div className='main_women_tri'>
        <div className="render_data_women">
            {womenData.map((elem) => (
                <Link to={`/women/${elem.id}`}>
                    <div key={elem.id}>
                        <img src={elem.image} alt="" className="product_img-tri" />
                        <div className="subDivProduct">
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

export default WomenProduct
