import React, { useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from "./Components/Home"
import Cart from './Components/cart/Cart'
import CardPayment from './Components/CardPayment';
import DetailPage from './Components/DetailPage';
import Footer from './Components/Footer';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Payment from './Components/Payment';
import Help from './Components/Help';

import LinenPage from './Components/LinenPage'
import PoloShirt from './Components/PoloShirt';
import WomenProduct from './Components/WomenProduct';
import KidsProduct from './Components/KidsProduct';
import ProductPage from './Components/ProductPage';
function App() {
  const [name, setName] = useState("");
  const log = (e) => {
    setName(e);
  }
  return (
    <div className="App">
      <Navbar name={name}/>
      <Footer />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/product" element= {<ProductPage />} />
        <Route path="/LinenPage" element={<LinenPage />} />
        <Route path="/PoloPage" element={<PoloShirt />} />
        <Route path="/Polo_Shirt/:id" element={<DetailPage />} />
        <Route path="/login" element ={<Login log={log} />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/help"  element={<Help />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cardPayment" element = {<CardPayment />} />
        <Route path="/product/:id" element= {<DetailPage />} />
        <Route path="/Linen_data/:id" element={<DetailPage />} />
        <Route path="/women" element={<WomenProduct />} />
        <Route path="/kidsData" element={<KidsProduct />} />
        <Route path="/womenData/:id" element ={<DetailPage />} />
        <Route path="/kidsData/:id" element={<DetailPage />} />
        <Route path="/mens/:id" element={<DetailPage />} />
        

      </Routes>
    </div>
  );
}

export default App;
