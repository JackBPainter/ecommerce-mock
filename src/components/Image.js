import React, { useState } from "react"

const Image = ({ className, img }) => {
    const [isHovered, setIsHovered] = useState(false)

    const plusIcon = isHovered && <i className="ri-add-circle-line cart"></i>
    const heartIcon = isHovered && <i className="ri-heart-line favorite"></i>

    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {plusIcon}
            {heartIcon}
            <img className="image-grid" src={img.url} /> 
        </div>
    )
}

export default Image