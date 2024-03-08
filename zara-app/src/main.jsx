import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AppContextProvider } from './Context/AppContext';
import { AuthContextProvider } from './Context/AuthContext';
import { SingleContextProvider } from './Context/SingleContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthContextProvider>
   <SingleContextProvider>
   <AppContextProvider>
    <BrowserRouter>
    <ChakraProvider>
    <App />
    </ChakraProvider> 
    </BrowserRouter>
    </AppContextProvider>
   </SingleContextProvider>
   </AuthContextProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

