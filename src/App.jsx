import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Search from './Components/Search';
import MoreDetails from './Components/MoreDetails';
import Cart from './Components/Cart';
import PrivateRoute from './Context/PrivateRoute';
import Selection from './Components/Selection';
import Payment from './Components/Payment';
import Success from './Components/Success';
import Home from './Components/Home';
import Kids from './Components/Kids';
import Login from './Components/Login';
import SignIn from './Components/SignIn';
import Help from './Components/Help';
import Men from './Components/Men';
import Women from './Components/Women';


function App() {


  return (
    <>
    <Box className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/Child" element={<Kids />} />
        <Route path="/help" element={<Help />} />
        <Route path="/search" element={<Search />}/>
        <Route path="/success" element={<Success />} />
        <Route path="/moreDetails" element={<MoreDetails />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/selection" element={<Selection />}/>
      <Route path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>}/>
      <Route path="/signIn" element={<SignIn />} />
      </Routes>
      
      
    </Box>
      
    </>
  )
}

export default App
