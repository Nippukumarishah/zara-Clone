import { Drawer, DrawerBody, DrawerFooter, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Box, Flex, Spacer, useDisclosure, Text, Button } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { HamburgerIcon } from "@chakra-ui/icons";
import { AppContext } from '../Context/AppContext';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import Dbody from './Dbody';
import Zara from './Zara';
import "./MoreProduct.css"

const Navbar = () => {
    const [placement] = React.useState("left");
    const { isOpen, onOpen, onClose} = useDisclosure();
    const {state} = useContext(AppContext)
    const {loggedIn} = useContext(AuthContext)
  return (
   <Flex
   bgColor="transparent"
   pos="fixed"
   top={0}
   w="100%"
   zIndex={2}
   className='scrollDetails'
   >
    <Flex p="2" gap={[3, 6, 24]}>
        <Box style={{ cursor: "pointer"}} p={2}>
            <Button onClick={() => onOpen()} m={1} bg="transparent">
                <HamburgerIcon />
            </Button>
            <Drawer
            placement={placement}
            onClose={onClose}
            isOpen={isOpen}
            size="sm"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerHeader ml={[0, 0, 12]}>
                        <Zara />
                    </DrawerHeader>
                    <DrawerFooter></DrawerFooter>
                    <DrawerBody>
                        <Dbody />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>

        <Link to="/">
            <Zara />
        </Link>

    </Flex>
    <Spacer />
    <Flex p="4" gap={4}>
        <Link to="search">
            <Box borderBottom="1px" borderColor="black" mb="42px" pr={5}>
                <Text style={{ cursor: "pointer" }} fontSize="lg" fontWeight={500} >
                    Search
                </Text>
            </Box>
        </Link>
        <Box>
            <Text style={{ cursor: "pointer" }} fontSize="md" fontWeight={250}>
                <Link to="/login">
                    { loggedIn.length === 0 ? "Log In" : loggedIn[0].name}
                </Link>
            </Text>
        </Box>
        <Link to="/help">
        <Box>
            <Text style={{ cursor: "pointer" }} fontSize="md" fontWeight={250}>
                Help
            </Text>
        </Box>
        </Link>
        <Link to="/cart">
            <Box style={{ cursor: "pointer"}}>
             
                    <Text style={{ cursor: "pointer" }} fontSize="ms">
                    SHOPPING BAG ({state.cart.length})
                    </Text>
               
            </Box>
        </Link>
    </Flex>
   </Flex>
  )
}

export default Navbar;
