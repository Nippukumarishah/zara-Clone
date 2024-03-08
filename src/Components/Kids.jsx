import { Box, Flex } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import SingleData from './SingleData';
import Filter from './Filter';
import Footer from './Footer';

function Kids(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        axios.get("https://zaraclone-json-data.herokuapp.com/Kids").then((res) =>{
            setData(res.data);
            setLoading(false);
        })
    },[]);


   



  return (
    <Box>
        {loading ? (
            <Loading />
        ) : (
            <Flex wrap="wrap">
                {data.map((ele) =>{
                    return <SingleData key={ele._id} ele={ele} {...ele} />

                })}
            </Flex>
        )}
      <Filter />
      <Footer />
    </Box>
  )
};

export default Kids
