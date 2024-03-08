import {
    Box,
    Button,
    Flex,
    Input,
    Text,
    useToast,
  } from "@chakra-ui/react";
  
  import React, { useContext, useEffect, useState } from "react";
  import { Link, useNavigate} from "react-router-dom";
  import { AuthContext } from "../Context/AuthContext";
  import Footer from "./Footer";
  import Navbar from "./Navbar";
  
  
  function Login() {
    const navigate = useNavigate()
     const toast = useToast();
    const { loggedIn,setLoggedIn } = useContext(AuthContext);
  
    const [data, setData] = useState([]);
  
   

  
    const [login, setLogin] = useState({ email: "", password: "" });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setLogin({ ...login, [name]: value });
    };
    const handleSubmit = () => {
      let nData = data.filter(
        (el) => el.email === login.email && el.password === login.password
      );
      setLoggedIn(nData);
      setLogin({email:"", password:""})
      setData(nData)
      navigate("/home")
    };
  
      useEffect(() => {
        loggedIn.length === 0
          ? toast({
              position: "top",
              title: "Please Log In",
              status: "error",
              isClosable: true,
            })
          : toast({
              position: "top",
              title: "Account created.",
              description: "Logged in Successfully",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
      }, [loggedIn]);
  
    return (
      <Box>
        <Box>
          <Navbar />
        </Box>
  
        <Box mt={200} ml="16%">
          <Flex gap={20}>
            {/* <form> */}
            <Box>
              <Text fontSize="md" fontWeight="600">
              LOG IN TO YOUR ACCOUNT
              </Text>
              <Box>
                
                <Input
                  border="none"
                  borderRadius="none"
                  borderColor="black"
                  borderBottom="1px"
                  onChange={handleChange}
                  value={login.email}
                  name="email"
                  type="text"
                  placeholder="E-MAIL"
                />
              </Box>
              <Box>
                
                <Input
                  border="none"
                  borderRadius="none"
                  borderColor="black"
                  borderBottom="1px"
                  onChange={handleChange}
                  value={login.password}
                  name="password"
                  type="password"
                  placeholder="PASSWORD"
                />
                <Box mt="15%">
                <Button
                  type="submit"
                  bgColor="white"
                  color="grey"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  LOG IN
                </Button>
                <Text fontSize="xs" fontWeight="600" mt="10%">
                  HAVE YOU FORGOTTEN YOUR PASSWORD?
                </Text>
              </Box>
              
              </Box>
            </Box>
            {/* </form> */}
  
           
  
            {loggedIn.length === 0 ? (
              <Box>
                <Text fontSize="md" fontWeight="600">
                NEED AN ACCOUNT?
                </Text>
  
                <Box>
                  <Link to="/signIn">
                    <Button mt="10%" bgColor="white" color="gray">
                      REGISTER
                    </Button>
                  </Link>
                </Box>
              </Box>
            ) : (
              <Box>
                <Text>NOT YOU?</Text>
                <Text>
                  PLEASE,
                  
                    <strong
                    onClick={()=>setLoggedIn([])}
                      style={{
                        borderBottom: "1px solid black",
                        cursor: "pointer",
                      }}
                    >
                      SIGN OUT
                    </strong>
                 
                  TO BEGIN BROWSING AS
                </Text>
                <Text>AN ANONYMOUS USER.</Text>
              </Box>
            )}
  
            
          </Flex>
        </Box>
       
  
        <Footer />
      </Box>
    );
  }
  
  export default Login;