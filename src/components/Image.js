import React, { useState, useContext } from "react"
import { AppContext } from "../Context"

const Image = ({className, img}) => {
    const [isHovered, setIsHovered] = useState(false)   
    const { toggleFavourite, allPhotos } = React.useContext(AppContext)

    const plusIcon = isHovered === true && <i className="ri-add-circle-line cart"></i>
    const heartIcon = isHovered === true && <i className="ri-heart-line favorite" onClick={() => toggleFavourite(img.id)}></i> 
    const heartFillIcon = img.isFavorite === true && <i className="ri-heart-fill favorite" onClick={() => toggleFavourite(img.id)}></i>
    
    // function heartIcon() {
    //     if(img.isFavorite) {
    //         return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
    //     } else if(hovered) {
    //         return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    //     }
    // }
    
    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
        {heartFillIcon || heartIcon} 
        {plusIcon}
            <img className="image-grid" src={img.url} alt=""/> 
        </div>
    )
}

export default Image

// # Challenge

// Make the image display the filled heart icon when it's already favorited

// Logic to follow:
// * If the image is favorited, display the filled heart icon always
// * Otherwise, if the image being hovered on, display the heart outline instead
// * If it isn't favorited OR hovered on, don't display anything

// Remember to make it so clicking the filled heart icon ALSO runs the toggleFavorite function!

// Filled heart icon:
// <i className="ri-heart-fill favorite"></i>