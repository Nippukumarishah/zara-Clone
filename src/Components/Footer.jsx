import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Footer(){

  return (
    <Box height="25%">
        <Flex align="center" justify="center" mt="15%">
            <Text fontSize="md">JOIN OUR NEWSLETTER</Text>
        </Flex>
        <Box>
            <Flex align="center" justify="center" mt="10%">
                <Box p="2%">
                    <Text fontSize="sm" fontWeight={300}>
                        INSTAGRAM
                    </Text>
                </Box>
                <Box p="2%">
                    <Text fontSize="sm" fontWeight={300}>
                        FACEBOOK 
                    </Text>

                </Box>
                <Box p="2%">
                    <Text fontSize="sm" fontWeight={300}>
                        X
                    </Text>

                </Box>
                <Box p="2%">
                    <Text fontSize="sm" fontWeight={300}>
                        PINTEREST 
                    </Text>

                </Box>
                <Box p="2%">
                    <Text fontSize="sm" fontWeight={300}>
                        YOUTUBE
                    </Text>

                </Box>
                <Box p="2%">
                    <Text fontSize="sm" fontWeight={300}>
                        SPOTIFY
                    </Text>

                </Box>
            </Flex>
        </Box>
        <div style={{display: "flex", alignItems: "flex-start", gap: "30px", marginTop: "30px", justifyContent:"space-around"}}>
                <div><h5 style={{fontSize:"17px"}}>HELP</h5>
                    <p style={{fontSize:"13px"}}>SHOP AT ZARA.COM</p>
                    <p style={{fontSize:"13px"}}>PRODUCT</p>
                    <p style={{fontSize:"13px"}}> GIFT CARD</p>
                    <p style={{fontSize:"13px"}}>PAYMENT</p>
                    <p style={{fontSize:"13px"}}>SHIPPING</p>
                    <p style={{fontSize:"13px"}}>EXCHANGE AND RETURNS</p>
                    <p style={{fontSize:"13px"}}>SHOPS AND COMPANY</p>
                    <p style={{fontSize:"13px"}}>CLOTHES COLLECTION</p>
                    <p style={{fontSize:"13px"}}>PROGRAMME</p>
                    <p style={{fontSize:"13px"}}>MY ACCOUNT</p>
                </div>
                <div><h5 style={{fontSize:"17px"}}>FOLLOW US</h5>
                    <p style={{fontSize:"13px"}}>NEWSLETTER</p>
                    <p style={{fontSize:"13px"}}>INSTAGRAM</p>
                    <p style={{fontSize:"13px"}}>FACEBOOK</p>
                    <p style={{fontSize:"13px"}}>TWITTER</p>
                    <p style={{fontSize:"13px"}}>PINTEREST</p>
                    <p style={{fontSize:"13px"}}>YOUTUBE</p>
                </div>
                <div><h5 style={{fontSize:"17px"}}>COMPANY</h5>
                    <p style={{fontSize:"13px"}}>ABOUT US</p>
                    <p style={{fontSize:"13px"}} >JOIN US</p>
                    <p style={{fontSize:"13px"}}>OFFICES</p>
                    <p style={{fontSize:"13px"}}>STORES</p>
                    <p style={{fontSize:"13px"}}>WORK WITH US</p>
                </div>
                <div><h5 style={{fontSize:"17px"}}>POLICIES</h5>
                    <p style={{fontSize:"13px"}}>PRIVACY POLICY</p>
                    <p style={{fontSize:"13px"}}>PURCHASE CONDITIONS</p>
                    <p style={{fontSize:"13px"}} >GIFT CARD CONDITIONS</p>
                    <p style={{fontSize:"13px"}}>COOKIES SETTING</p>
                </div>
            </div>

            <div style={{display:"flex", justifyContent: "space-between", marginTop: "60px"}}>
                <p>INDIA</p>
                <p>ENGLISH   © ALL RIGHTS RESERVED</p>
            </div>
        <Box p="np2%" mt={20} ml="15%">
            <Text fontSize="xs" lineHeight={1.2} fontWeight={300}>
            NAME AND ADDRESS OF THE MANUFACTURER:
            </Text>
            <Text fontSize="xs" lineHeight={1.2} fontWeight={300}>
            INDUSTRIA DE DISENO TEXTIL, S.A. (INDITEX, S.A.)
            </Text>
            <Text fontSize="xs" lineHeight={1.2} fontWeight={300}>
            AVENIDA DE LA DIPUTACION, EDIFICIO INDITEX, 15143, ARTEIXO (A CORUNA), SPAIN
            </Text>
            
        </Box>
      
    </Box>
  )
}

export default Footer
