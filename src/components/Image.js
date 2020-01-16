import React, { useState } from "react"

const Image = ({className, img}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(true)}
        >
            <img className="image-grid" src={img.url}/> 
        </div>
    )
}

export default Image