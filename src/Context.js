import React, { useState, useEffect } from "react"

const AppContext = React.createContext()

const ContextProvider = ({ children }) => {
    const [allPhotos, setAllPhotos] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const photosUrl = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        setIsLoading(true)
        fetch(photosUrl)
            .then(response => response.json())
            .then(data => setAllPhotos(data) && setIsLoading(false)) 
    }, [])

    const toggleFavourite = id => {
        const newArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        }) 
        setAllPhotos(newArr)
    }

    return (
        <AppContext.Provider value={{ allPhotos, isLoading, toggleFavourite }}>
            {children}
        </AppContext.Provider>
    )
}

export { ContextProvider, AppContext };