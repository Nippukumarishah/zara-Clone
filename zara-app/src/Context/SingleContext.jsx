import { createContext, useState } from "react";


export const SingleContext = createContext()

export const SingleContextProvider = ({ children }) => {
    const [pageData, setPageData] = useState({})
    return(
        <SingleContext.Provider value={{pageData, setPageData}}>
            {children}
        </SingleContext.Provider>
    )
}