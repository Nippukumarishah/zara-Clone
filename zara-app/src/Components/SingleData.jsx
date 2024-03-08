import React, { useContext } from 'react'
import { SingleContext } from '../Context/SingleContext'
import { useNavigate } from 'react-router-dom'
import "./SingleData.css"
import { Box, Container, Text, Flex, } from '@chakra-ui/react'

function SingleData({ prod_name, imgUrl, price, _id, el }){

    const {setPageData} = useContext(SingleContext)
    const navigate = useNavigate()

    return (
    <Container mt="100px" cursor="pointer" onClick={() => {
        setPageData(el)
        navigate("/moreDetails")
    }}>
        <Box className='single_data'>
            <img src={imgUrl} alt="Image" />
            <Flex justify="space-between">
                <Text fontSize="xs">{prod_name}</Text>
                <Text fontSize="xs">{price}</Text>
            </Flex>
            <Box className="single_data_text">
                <Text fontSize="sm">
                    join life / <span style={{fontWeight:"lighter"}}>collection</span>{" "}
                </Text>
            </Box>
        </Box>

    </Container>
      
    
  )
}

export default SingleData
