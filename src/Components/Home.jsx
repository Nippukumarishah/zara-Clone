import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer';
import { useState } from 'react';
import Navbar from './Navbar';

let Women = {
    image1: "https://static.zara.net/photos///contents/mkt/spots/ss24-north-woman-new/subhome-xmedia-09-3//w/188/IMAGE-portrait-vertical-2-fill-c1cdd5b7-53c6-4df1-b1a5-4e3dd7e6fa5a-default_0.jpg?ts=1709378185656",
    image2: "https://static.zara.net/photos///contents/mkt/spots/ss24-north-woman-collection/subhome-xmedia-09-3//w/188/IMAGE-portrait-vertical-2-fill-e361214d-bc14-4738-8501-0e91e14c7ef8-default_0.jpg?ts=1709377970455",
    image3: "https://static.zara.net/photos///contents/mkt/spots/ss24-north-woman-jackets/subhome-xmedia-09//w/188/IMAGE-portrait-vertical-2-fill-54f3ecbe-f287-4c0f-8caf-76c45a64d169-default_0.jpg?ts=1709378839433",
    image4: "https://static.zara.net/photos///contents/mkt/spots/ss24-north-woman-join-life/subhome-xmedia-08//w/188/IMAGE-portrait-vertical-3-default-fill-6d737634-7b59-4777-85c3-12af204864d5-default_0.jpg?ts=1708507407108",
};
let Men = {
    image1: "https://static.zara.net/photos///contents/mkt/spots/ss24-north-man-new/subhome-xmedia-10//w/188/IMAGE-portrait-vertical-2-fill-19102789-9892-4fd3-b32f-c97fe1102d9c-default_0.jpg?ts=1709565861170",
    image2: "https://static.zara.net/photos///contents/mkt/spots/ss24-north-man-jackets/subhome-xmedia-10//w/188/IMAGE-portrait-vertical-2-fill-aabd4b98-5304-463d-b3ca-7b52d4ca36af-default_0.jpg?ts=1709570512234",
    image3: "https://static.zara.net/photos///contents/mkt/spots/ss24-north-man-shoes/subhome-xmedia-10//w/188/IMAGE-portrait-vertical-2-fill-dc8dea1f-58e1-4656-9204-d291ae86fe70-default_0.jpg?ts=1709570706320",
    image4: "https://static.zara.net/photos///contents/mkt/spots/ss24-north-man-joinlife/subhome-xmedia-08//w/188/IMAGE-portrait-vertical-3-default-fill-24c867d9-0c74-4977-a9bf-a7701634baf0-default_0.jpg?ts=1708507662275",
};
let Child = {
    image1: "https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-true-neutrals/subhome-xmedia-08//w/188/IMAGE-portrait-vertical-2-default-fill-14819789-3649-4bfb-b32e-c47eed656340-default_0.jpg?ts=1708675538345",
    image2: "https://static.zara.net/assets/public/0307/fda5/c77b4f63887b/fff3d4d506d5/01207407400-200-p/01207407400-200-p.jpg?ts=1709279933440&w=118",
    image3: "https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-babyboy/subhome-xmedia-08//w/188/IMAGE-portrait-vertical-2-default-fill-947a259a-ded8-4f45-b430-140e66788461-default_0.jpg?ts=1708674776351",
    image4: "https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-boy/subhome-xmedia-09//w/188/IMAGE-portrait-vertical-2-default-fill-5882f998-44f9-4037-9537-89f2c9847751-default_0.jpg?ts=1709219204838",
    
};
let arr = [Women, Men, Child]

function Home(){
    const [ind, setInd] = useState(0)
  return (
    <Box pos="relative">
        <Navbar />
        <Box w="100%" h="140vh" display="flex" justifyContent="space-around" >
            <img src={arr[ind].image1} alt="" width="100%" />
            <Flex zIndex={2} pos="Fixed" top={50} left={1} gap={1300} >
                <Box>
                    <Button
                    disabled={ind === 0}
                    onClick={() => setInd(ind -1)}
                    colorScheme='transparent'
                    size="lg"
                    mt={60}>
                        <ChevronLeftIcon w={12} h={10} />
                    </Button>
                </Box>
                <Box>
                    <Button
                    disabled={ind === 2}
                    onClick={() => setInd(ind + 1)}
                    colorScheme='transparent'
                    size="lg"
                    mt={60}>
                        <ChevronRightIcon w={12} h={10} />
                    </Button>
                </Box>
            </Flex>
        </Box>
        <Box mt="-10%" w="100%" h="140vh" display="flex" justifyContent="space-around">
        <img src={arr[ind].image2} alt="" width="100%"  />
      </Box>
      <Box mt="-10%" w="100%" h="140vh" display="flex" justifyContent="space-around">
        <img src={arr[ind].image3} alt="" width="100%"  />
      </Box>
      <Box mt="-10%" w="100%" h="140vh" display="flex" justifyContent="space-around">
        <img src={arr[ind].image4} alt="" width="100%" />
      </Box>
      
      <Footer />
    </Box>
  )
}

export default Home
