import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom"
import Footer from './Footer';


function Selection(){
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let monthsName = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]
let day =(dayNames[new Date().getDay()])
let month = monthsName[new Date().getMonth()];
let date = (new Date().getUTCDate());

const { total } = useContext(AppContext);

 
    return (
    <Box>
        <Box mt={150} mr="190px" ml="190px">
            <Text fontSize="md" fontWeight={700}>
                CHOOSE YOUR SHIPPING METHOD
            </Text>
            <Box mt="7">
                <Text fontSize="md" fontWeight={700}>
                    IN-STORE PICK UP
                </Text>
                <Flex
                justify="space-between"
                borderTop="1px"
                borderBottom="1px"
                p="8px"
                borderColor="black.300">
                    <Box>
                        {day} {date} ,{month}
                    </Box>
                    <Text fontSize="md" fontWeight={700}>
                        Free
                    </Text>
                </Flex>
            </Box>
            <Box mt={38}>
                <Text fontSize="md" fontWeight={700}>
                    HOME DELIVERY
                </Text>
                <Flex
                justify="space-between"
                borderTop="1px"
                borderBottom="1px"
                p="8px"
                borderColor="black.300">
                    <Box>
                        <Box>
                            <Text >
                            {day} {date} ,{month}
                            </Text>
                        </Box>
                        <Box>
                            <Text>TRANSPORT RESTRICTIONS MAY APPLY TO SOME AREAS</Text>
                        </Box>
                        <Box>
                            <Text>FREE SHIPPING FOR ORDERS OVER ₹ 2,990 </Text>
                            <Text>DELIVERY TIME FRAMES</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text fontSize="md" fontWeight={700}>
                            Free
                        </Text>
                    </Box>
                </Flex>
            </Box>
            <Box bgColor="white">
                <Flex
                justify="center"
                align="center"
                pos="fixed"
                bottom="1px"
                right="5px"
                gap="20px"
                >
                    <Box bgColor="white">
                        <Text fontSize="xs" lineHeight="12PX" fontWeight={700}>
                            TOTAL ₹ {total.toFixed(2)}
                        </Text>
                        <Text fontSize="xs" lineHeight="12px">
                            INCLUDING GST{" "}
                        </Text>
                        <Text fontSize="xs" lineHeight="12px">
                            * EXCL SHIPPING COST
                        </Text>
                    </Box>
                    <Box>
                        <Link top="/payment">
                            <Button
                            width="250px"
                            bg="black"
                            color="white"
                            alignItems="center"
                            >Continue</Button>
                        </Link>
                    </Box>
                </Flex>
            </Box>
            <Footer />
        </Box>
      
    </Box>
  )
}

export default Selection;