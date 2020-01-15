import React, { useContext } from "react"

const AppContext = React.createContext()

const ContextProvider = ({ children }) => {
    return (
        <AppContext.Provider value="">
            {children}
        </AppContext.Provider>
    )
}

export { ContextProvider, AppContext };