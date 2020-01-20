import React from "react"
import { AppContext } from "../Context.js"
import { getClass } from "../utils"

// Components
import Image from "../components/Image"

const Photos = () => {
    const {allPhotos} = React.useContext(AppContext)

    const images = allPhotos.map((img, i) => (
        <Image 
            key={img.id} 
            img={img} 
            className={getClass(i)} 
        />
    ))

    return (
        <main className="photos">
            {images}
        </main>
    )
}

export default Photos