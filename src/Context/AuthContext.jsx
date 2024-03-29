import { createContext, useState } from "react";


export const AuthContext = createContext()
export function AuthContextProvider({ children }){
    const [loggedIn, setLoggedIn] = useState([]);

    return (
        <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}
