import { Box,  Flex } from '@chakra-ui/react';
import axios from 'axios';
import React, {  useEffect, useState } from 'react'

import Loading from './Loading';
import SingleData from './SingleData';
import Footer from './Footer';
import Filter from './Filter';





const Men = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
   

    useEffect(()=>{
        axios.get("https://zaraclone-json-data.herokuapp.com/Men").then((res) => {
            setData(res.data);
            setLoading(false);
        });
    },[]);
  return (
    <Box>
        {loading ? (
            <Loading />
        ) : (
            <Flex wrap="wrap">
                {data.map((ele)=>{
                    return <SingleData key={ele._id} ele={ele} {...ele} />;
                })}
            </Flex>
        )}
      <Footer />
      <Filter />
    </Box>
  )
}

export default Men
