import React, { createContext, useEffect, useReducer, useState } from 'react';
import { AppReducer } from './AppReducer'
let initialState = {cart:[]}
export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const [total, setTotal] = useState(0)


    useEffect(() =>{
        setTotal(state.cart.reduce((acc, ini) => {
            return acc + (Number(ini.price) * Number(ini.qty))
        },0))
    },[state.cart])
  return (
    <AppContext.Provider value={{state,dispatch,total}}>
        {children}
    </AppContext.Provider>
  )
}
