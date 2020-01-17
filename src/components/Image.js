import React, { useState, useContext } from "react"
import { AppContext } from "../Context"

const Image = ({className, img}) => {
    const [isHovered, setIsHovered] = useState(false)   
    const { toggleFavourite } = React.useContext(AppContext)
    
    const heartIcon = isHovered === true && <i className="ri-add-circle-line cart"></i>
    const plusIcon = isHovered === true && <i className="ri-heart-line favorite" onClick={() => toggleFavourite(img.id)}></i>

    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
        {heartIcon}
        {plusIcon}
            <img className="image-grid" src={img.url} alt=""/> 
        </div>
    )
}

export default Image