import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Select, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"


const item = ["price", "size", "type1", "type2", "type3", "prod_name"]

function Filter (){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [sort, setSort]= useState("")
    const [data, setData] = useState([])
    const btnRef = useRef();

    useEffect(()=>{
        axios.get(
            `https://zaraclone-json-data.herokuapp.com/products?_sort=${sort}&_order=asc`
        )
        .then((res) => setData(res.data));
    },[sort])


  return (
    <Box>
        <Box pos="fixed" top={[95,65,55]} right="1%" zIndex="3">
            <Button
            ref={btnRef}
            border='1px'
            borderRadius="0px"
            bgColor="white"
            borderColor="black"
            color="black"
            onClick={onOpen}>
                <Text fontSize="xs">FILTERS</Text>
            </Button>
            <Drawer
            size="sm"
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}>
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
  )
}


export default Filter

