import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export function  Success(){
    const OverlayTwo = () => (
        <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="80%"
        backdropBlur="2px"
        />

    );

    useEffect(()=>{
        setOverlay(<OverlayTwo />);
        
    },[])
    const OverlayOne = ()=> (

        <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
        />
    );
    const { isOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
            <ModalHeader ml="32%">
                <img src="https://c.tenor.com/BSY1qTH8g-oAAAAC/check.gif" width="120px" alt="" />
            </ModalHeader>
            <ModalBody ml="25%">
                <Text>Hurry! Payment Successfull</Text>
                <Text ml="-25px">Transaction Id : {Math.random() * 10 ** 17}</Text>
            </ModalBody>
            <ModalFooter mr="25%">
                <Link to="/">
                    <Button
                    bgColor="#6ea83a"
                    color="white"
                    onClick={onClose}>
                        Continue Shopping
                    </Button>
                </Link>
            </ModalFooter>
        </ModalContent>
    </Modal>
      
    </>
  )
}

export default Success;