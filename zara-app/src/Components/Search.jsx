import { Box, Button, Text, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Input, Select, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Footer from './Footer';
import Loading from './Loading';
import SingleData from './SingleData';



const item = ["price" , "size", "type1", "type2", "type3", "prod_name"];

function Search(){
    const [text, setText] = useState("")
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getSearch = (e) => {
        e.preventDefault()
        axios
        .get(`https://zaraclone-json-data.herokuapp.com/products?q=${text}`)
        .then((res) => {
            setData(res.data);
            setLoading(false);
        });
        setText("")
    }

    const {isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()
    const [sort, setSort] = useState("");

    useEffect(()=>{
        axios
        .get(
            `https://zaraclone-json-data.herokuapp.com/products?_sort=${sort}&_order=asc`

        )
        .then((res) => {
            setData(res.data);
            setLoading(false);
        });

    },[sort]);
  return (
    <Box>
        <Box>
            <Box ml="200px">
                <Text
                as="h1"
                textAlign="center"
                fontSize="6xl"
                fontWeight="500"
                mt="100px"
                marginTop="150px"
                >
                    {" "}
                    SEARCH
                </Text>
                <form onSubmit={getSearch}>
                    <Input
                    width="15%"
                    onChange={(e) => setText(e.target.value)}
                    border="none"
                    borderRadius="0"
                    borderBottom="1px"
                    borderColor="black"
                    type="text"
                    value={text}
                    placeholder="search items....."
                    />
                    <Button bgColor="red" display="none" color="black">
                        Submit
                    </Button>
                </form>
            </Box>
            {loading ? (
                <Box width="400px" height="400px" bgColor="white">
                    <Loading />
                </Box>
            ) : (
                <Flex wrap="wrap">
                    {data.map((ele) => {
                        return <SingleData key= {ele._id} ele={ele} {...ele} />;
                    })}
                </Flex>
            )}

            <Footer />
            <Box>
                <Box pos="fixed" top="52px" right="10px" zIndex="3">
                    <Button
                    ref={btnRef}
                    border="1px"
                    borderRadius="0px"
                    bgColor="white"
                    borderColor="black"
                    color="black"
                    onClick={onOpen}
                    >
                        <Text fontSize="xs">FILTERS</Text>
                    </Button>
                    <Drawer
                    size='sm'
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Filter</DrawerHeader>
                            <DrawerBody p="10px">
                                <Box>
                                    <Text fontSize="sm">Sort By :</Text>
                                    <Select
                                    placeholder='Select option'
                                    onChange={(e) => setSort(e.target.value)}
                                    value={sort}
                                    >
                                        {item.map((ele) => {
                                            return(
                                                <option key={ele} value={ele}>
                                                    {ele}
                                                </option>
                                            );
                                        })}
                                    </Select>
                                </Box>
                            </DrawerBody>
                            <DrawerFooter></DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </Box>
            </Box>


        </Box>
      
    </Box>
  )
}

export default Search
