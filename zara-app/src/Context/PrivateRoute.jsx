import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}){

    const {loggedIn} = useContext(AuthContext)

    if(loggedIn.length === 0){
        alert("Please Login First then only you can add the product in cart")
        return <Navigate to="/login" />
    }
  return children
}

export default PrivateRoute
