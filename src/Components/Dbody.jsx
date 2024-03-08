import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

import "./MoreProduct.css"

let Men = [
    "/// NEW",
    "SPECIAL OCCASION",
    "#SELECTEDBY",
    "BEST SELLERS",
    "JACKETS | COATS",
     "SHIRTS",
    "T-SHIRTS",
    "TROUSERS",
    "JEANS",
    "SWEATERS | CARDIGANS",
    "HOODIES | SWEATSHIRTS",
    "OVERSHIRTS",
    "POLO SHIRTS",
    "LINEN",
    "SHORTS",
    "BLAZERS",
    "TRACKSUITS",
    "JACKETS",
    "SHOES",
    "BAGS | BACKPACKS",
    "ACCESSORIES",
    "KNITWEAR",
    "PERFUMES",
  ];
  
  let Women = [
    "/// NEW",
    "BEST SELLERS",
    "BLAZERS",
    "JACKETS",
    "WAISTCOATS",
    "DRESSES",
    "SKIRTS",
    "CARDIGANS | SWEATERS",
    "TOPS | BODYSUITS",
    "SHIRTS",
    "T-SHIRTS",
    "JEANS",
    "TROUSERS",
    "SHOES",
    "SWEATSHIRTS",
    "KNITWEAR",
    "TRENCH | COATS",
    "SHORTS | SKORTS",
    "BAGS",
    "ACCESSORIES | JEWELLERY",
    "PERFUMES",
    "MAKEUP",
    "BASICS",
    "CO-ORD SETS",
    "SUITS",
    "TRACKSUITS",
  ];
  
  let Child = [
    "GIRL | 6 - 14 YEARS",
    "BOY | 6 - 14 YEARS",
    "BABY GIRL | 6 MONTHS - 5 YEARS",
    "BABY BOY | 6 MONTHS - 5 YEARS",
    "MINI | 0-12 MONTHS",
    "ACCESSORIES | SHOES | 0 - 14 YEARS",
    "JOIN LIFE",
  ];
  let women = 'women';
  let men = "men";
  let child = "child";

function Dbody(){
    const [name, setName] = useState(Women);
    const [link, setLink] = useState("women");
    
  return (
    <Box className='scrollDetails'>
        <Flex gap={6}>
            <Box style={{ cursor: "pointer"}} onClick={() => {
                setName(Women)
                setLink(women)
            }}>Women</Box>
            <Box style={{ cursor: "pointer"}} onClick={() => {
                setName(Men)
                setLink(men)
            }}>
                Men
            </Box>
            <Box style={{ cursor: "pointer"}} onClick={() => {
                setName(Child)
                setLink(child)
            }}>Child</Box>
        </Flex>
        <Box mt={20}>
            {name &&
            name.map((ele, ind) => {
                return(
                    <Text key={ind} fontSize="xs" fonrWeight={400}>
                        <Link to={`/${link}`}>{ele}</Link>
                    </Text>
                );
            })}
        </Box>
        <Box ml={-6} mr={-6} mt={8}>
            <Text
            fontSize="xs"
            backgroundColor="yellow"
            p={2}
            pl={6}
            fontWeight={400}>
                SALE
            </Text>
            
        </Box>
        <Box mt={8} mb={8}>
            <Text fontSize="xs" fontWeight={400}>
                +INFO
            </Text>
        </Box>
      
    </Box>
  )
}

export default Dbody
