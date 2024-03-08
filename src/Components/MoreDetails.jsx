import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'
import React, { useContext } from 'react'
import "./MoreProduct.css";
import Footer from "./Footer"
import { Link } from "react-router-dom"
import { SingleContext } from '../Context/SingleContext'
import { AppContext } from '../Context/AppContext';

function MoreDetails() {
const { pageData, setPageData } = useContext(SingleContext);
const { state, dispatch } = useContext(AppContext)
const { isOpen, onOpen, onClose } = useDisclosure();
const btnRef = React.useRef();

  return (
    <Box>
      <Box mt="84px" alignItems="center" ml="16%" className='scrollDetails'>
        <Flex direction={["column", "row", "row"]} gap={20}>
            <Box width={["100%", "20%", "20%"]} mt="10%">
                <Text>MATERIALS, CARE AND ORIGIN</Text>
                <Text mt={8}>ORIGIN</Text>
                <Text 
                mt={8}
                maxHeight={["1%", "20%", "20%"]}
                style={{ overflow: "auto"}}
                fontSize="sm"
                fontWeight="300"
                >
                    We work alongside our suppliers, workers, unions and international
              bodies to develop a supply chain that respects and promotes human
              rights, contributing to the United Nations Sustainable Development
              Goals. Additionally, thanks to an ongoing collaboration with our
              suppliers, we have developed a tracking programme that allows us
              to determine where and how our products are being made. Made in
              Vietnam CARE Caring for your clothes is caring for the
              environment. Lower temperature washes and delicate spin cycles are
              gentler on garments and help to protect the colour, shape and
              structure of the fabric. Furthermore, they reduce the amount of
              energy used in care processes. [car]7 Machine wash at max.
              30ºC/86ºF with short spin cycle [car]14 Do not use bleach [car]18
              Iron at a maximum of 110ºC/230ºF [car]125 Dry clean with
              tetrachloroethylene [car]35 Do not tumble dry MATERIALS We work
              with monitoring programmes to ensure compliance with safety,
              health and quality standards for our products. The Green to Wear
              2.0 standard aims to minimise the environmental impact of textile
              manufacturing. To that end, we have developed Inditex’s The List
              programme, which helps guarantee both that production processes
              are clean and that our garments are safe and healthy. OUTER SHELL
              74% polyester · 20% viscose · 6% elastane View Less 
                </Text>
            </Box>
            <Box width="25%">
                <img src={pageData.imgUrl} alt='' />

            </Box>
            <Box width={["100%", "20%", "20%"]}>
                <Text mt={8}>{pageData.prod_name}</Text>
                <Text
                style={{ maxHeight: "20%", overflow: 'auto'}}
                mt={8}
                fontSize="sm"
                fontWeight="300"
                >
                    {pageData.material}
                </Text>
                <Text mt={8}>₹{pageData.price}</Text>
                <Text>Mrp included of all tax</Text>
                <Box mt={8} borderTop="1px" borderBottom="1px" borderColor="black">
                  <Text
                  fontSize="xs"
                  fontWeight="200"
                  _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
                  >
                    XS
                  </Text>
                  <Text
                  fontSize="xs"
                  fontWeight="200"
                  _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
                  >
                    {" "}
                  S{" "}
                  </Text>
                  <Text
                  fontSize="xs"
                  fontWeight="200"
                  _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
                  >
                    M
                  </Text>
                  <Text
                  fontSize="xs"
                  fontWeight="200"
                  _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
                  >
                    L
                    </Text>
                  <Text
                  fontSize="xs"
                  fontWeight="200"
                  _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
                  >
                    XL{" "}
                  </Text>
                  <Text
                  fontSize="xs"
                  fontWeight="200"
                  _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
                  >
                    XXL
                  </Text>
                </Box>
                <Flex mt={8} justify="space-between">
                  <Text fontSize="xs" fontWeight="200">
                    Find Your Size
                  </Text>
                  <Text fontSize="xs" fontWeight="200">
                    Guide
                  </Text>
                </Flex>
                <Box>
                  <Button
                  ref={btnRef}
                  bg="black"
                  color="white"
                  mt={8}
                  onClick={() => {
                    dispatch({ type: "Add_to_cart", payload: pageData});
                    onOpen();
                  }}>
                    Add to Bag
                  </Button>
                </Box>
                <Text fontSize="xs" fontWeight="200" mt={8}>
                  DELIVERY, EXCHANGES AND RETURNS
                </Text>
            </Box>
        </Flex>
        <Drawer 
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Cart</DrawerHeader>
            <DrawerBody>
              <Box maxHeight="85%" overflow="auto" mt="20px" p="2px">
                {state.cart.map((ele) => {
                  return(
                    <Box mt={8} key={ele._id}>
                      <Flex justify="space-around">
                        <Box>
                          <Text mb={1}>{ele.prod_name}</Text>
                          <Image
                          boxSize='100%'
                          objectFit="cover"
                          src={ele.imgUrl}
                          alt=''
                          />
                        </Box>
                        <Box>
                          <Text fontSize="md" fontWeight="200" mt={20}>
                          ₹{ele.price}
                          </Text>
                        </Box>
                      </Flex>
                    </Box>

                  );
                })}
              </Box>
            </DrawerBody>
            <Box border="1px" borderColor="black" width="100%" bg="black"></Box>
          <DrawerFooter>
            <Link to="/cart">
              <Button bg="black" color="white" width="250%" ml="-200%">GO To Basket</Button>
            </Link>
          </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
      <Footer />
    </Box>
  );
}

export default MoreDetails
