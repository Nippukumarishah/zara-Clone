import React, { useEffect, useState } from 'react'
import './StyleCss/ProductPage.css'
import { Link } from '@mui/material';

const ProductPage = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProductData();
    },[]);

    async function getProductData(){
        try {
            const res = await fetch("https://zaraclone.herokuapp.com/product")
            const data = await res.json()
            setProduct(data)
        } catch (error) {
            console.log(Error)
        }
    }


  return (
    <div className='main_div'>
        <div className='render-data'>
            {product.map((elem) => (
                <Link to={`/product/${elem.id}`} className='cart-price'>
                    <div key={elem.id}>
                        <img src={elem.image} alt="" className="product-image" />
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

export default ProductPage
