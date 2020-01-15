import React, { useState } from "react"

const AppContext = React.createContext()

const ContextProvider = ({ children }) => {
    const [allPhotos, setAllPhotos] = useState()
    return (
        <AppContext.Provider value={{allPhotos}}>
            {children}
        </AppContext.Provider>
    )
}

export { ContextProvider, AppContext };