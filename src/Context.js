import React, { useState, useEffect } from "react"

const AppContext = React.createContext()

const ContextProvider = ({ children }) => {
    const [allPhotos, setAllPhotos] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const photosUrl = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        setIsLoading(true)
        fetch(photosUrl)
            .then(response => response.json())
            .then(data => setAllPhotos(data) && setIsLoading(false)) 
    }, [])

    console.log(allPhotos)

    return (
        <AppContext.Provider value={{ allPhotos, isLoading }}>
            {children}
        </AppContext.Provider>
    )
}

export { ContextProvider, AppContext };