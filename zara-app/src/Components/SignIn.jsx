import { Box, Button, Container, Input, Text, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';

function SignIn(){
    const toast = useToast()
    const navigate = useNavigate();
    let [data, setData] = useState([])
    let [setSubmit] = useState(false)
    let [user, setUser]= useState({
        email: "",
        password: "",
        name: "",
        address: "",
        locality: "",
        state: "",
    
    });
    const getData = () => {
        axios.get("https://zaraclone-json-data.herokuapp.com/userData")
        .then((res) => setData(res.data));
    }
    useEffect(()=>{
        getData();
    },[])
    const postData = async(user) =>{
        await axios({
            url: "https://zaraclone-json-data.herokuapp.com/userData",
            method:"post",
            data:{
                ...user,
                id: Date.now(),
            },
        })
        toast({
            title: "Account created.",
            description: "You have Successfully signed in.",
            status: "success",
            duration: 9000,
            isClosable: true,
        });
        navigate("/home")
    }
    const handleChange = (e)=>{
        const {name, value} = e.target
        setUser({...user,[name]:value})

    }
    const handleSubmit = ()=> {
        let nData = data.filter((e) => e.mail === user.email);
        if(nData.length > 0){
            return toast({
                position: "top",
                title: "Account not created.",
                description: `Already have a account with ${user.email}`,
                status: "error",
                duration: 9000,
                isClosable: true,
            });

        }
        else if(user.email.length === 0){
            return toast({
                position: "top",
                title: "Account not create",
                description: `Please enter email`,
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        }
        else if(user.password.length === 0){
            return toast({
              position: "top",
              title: "Account not created",
              description: `Please Enter Password`,
              status: "error",
              duration: 9000,
              isClosable: true, 
            });
        }
        else if(user.password.length < 8){
            return toast({
                position: 'top',
                title: "Account not create",
                description: `Password should be of 8 characters`,
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }
        else if(user.name.length === 0){
            return toast({
                position: "top",
                title: "Account not created.",
                description: `Please Enter Name`,
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }
        else if(user.address.length === 0){
            return toast({
                position: 'top',
                title: "Account not created.",
                description: `Please Enter Address`,
                status: "error",
                duration: 9000,
                isClosable: true,
              });
        }
        else if (user.locality.length === 0) {
            return toast({
              position: 'top',
              title: "Account not created.",
              description: `Please Enter Locality`,
              status: "error",
              duration: 9000,
              isClosable: true,
            });
    } 
    else if (user.state.length === 0) {
        return toast({
          position: 'top',
          title: "Account not created.",
          description: `Please Enter State`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
}
else{
    setSubmit(true);
    postData(user);
    setUser({
      email: "",
      password: "",
      name: "",
      address: "",
      locality: "",
      state: "",
    });
}
    }
  return (
    <Box>
        <Container>
            <Box mt="35%">
            <Text fontSize="md" fontWeight="600">
                PERSONAL DETAILS
            </Text>
            </Box>
            <Box>
            <Text fontSize="xs" fontWeight="200" mt="10%">
              E-MAIL
            </Text>
              <Input
              onChange={handleChange}
              name="email"
              value={user.email}
              border="none"
              borderRadius="none"
              borderColor="black"
              borderBottom="1px"
              type="text"/>  
            </Box>
            <Box>
                <Text fontSize="xs" fontWeight="200" mt="10%">
                    PASSWORD
                </Text>
                <Input
                onChange={handleChange}
                name="password"
                value={user.password}
                border="none"
                borderRadius="none"
                borderColor="black"
                borderBottom="1px"
                type='text'/>
            </Box>
            <Box>
                <Text fontSize="xs" fontWeight="200" mt="10%">
                    NAME
                </Text>
                <Input
                onChange={handleChange}
                name='name'
                value={user.name}
                border="none"
                borderRadius="none"
                borderColor="black"
                borderBottom="1px"
                type="text" />
            </Box>
            <Box>
                <Text fontSize="xs" fontWeight="200" mt="10%">
                    ADDRESS
                </Text>
                <Input
                onChange={handleChange}
                name="address"
                value={user.address}
                border="none"
                borderRadius="none"
                borderColor="black"
                borderBottom="1px"
                type='text' />

            </Box>
            <Box>
            <Text fontSize="xs" fontWeight="200" mt="10%">
                    LOCALITY
                </Text>
                <Input
                onChange={handleChange}
                name="address"
                value={user.address}
                border="none"
                borderRadius="none"
                borderColor="black"
                borderBottom="1px"
                type='text' />
            </Box>
            <Box>
            <Text fontSize="xs" fontWeight="200" mt="10%">
                    LOCALITY
                </Text>
                <Input
              onChange={handleChange}
              name="state"
              value={user.state}
              border="none"
              borderRadius="none"
              borderColor="black"
              borderBottom="1px"
              type="text"
            />
            </Box>
            <Box>
                <Text fontSize="xs" fontWeight='180' mt="8%">
                We will send you an SMS to verify your phone number
                </Text>
            </Box>
            <Box>
                <Input
                type="checkbox"
                name='news'
                w="0.5"
                h="5"
                value={user.news}
                borderColor="black"/>&nbsp;&nbsp;
                <label>I wish to receive Zara news on my e-mail</label>
            </Box>
            <Box>
                <Input
                type="checkbox"
                w="0.5"
                h="5"
                 name='news'
                value={user.privacy}
                borderColor="black"/>&nbsp;&nbsp;
                <label>I accept the privacy statement</label>
            </Box>
            <Box ml="25%" mt="15%">
                <Button 
                onClick={() => {
                    handleSubmit()
                }
                } bgColor="lightPink" color="gray" width="30">
                    CREATE ACCOUNT
                </Button>
            </Box>
        </Container>
      <Footer />
      <Footer />
    </Box>
    
  )
}

export default SignIn
