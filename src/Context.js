import React, { useState, useEffect } from "react"

const AppContext = React.createContext()

const ContextProvider = ({ children }) => {
    const [allPhotos, setAllPhotos] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [cartItems, setCartItems] = useState([])

    console.log(cartItems)

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

    const addToCart = newItem => { 
        setCartItems(prevItems => [...prevItems, newItem])
    }

    const removeFromCart = id => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    return (
        <AppContext.Provider value={{ allPhotos, isLoading, toggleFavourite, cartItems, addToCart, removeFromCart}}>
            {children}
        </AppContext.Provider>
    )
}

export { ContextProvider, AppContext };