import React from "react"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover";
import { AppContext } from "../Context"

const Image = ({className, img}) => {
    const [hovered, hoverRef] = useHover()
    const { toggleFavourite, addToCart, cartItems, removeFromCartId } = React.useContext(AppContext)
    
    const addToCartIcon = hovered && <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    const addedToCartIcon = cartItems.find(cartItem => cartItem.id === img.id) && 
        <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCartId(img.id)}></i>

    const heartIcon = hovered && <i className="ri-heart-line favorite" onClick={() => toggleFavourite(img.id)}></i> 
    const heartFillIcon = img.isFavorite === true && 
        <i className="ri-heart-fill favorite" onClick={() => toggleFavourite(img.id)}></i>
    

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
            ref={hoverRef}
        >
        {heartFillIcon || heartIcon} 
        {addedToCartIcon || addToCartIcon}
            <img className="image-grid" src={img.url} alt=""/> 
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({ // Shape allows you to specifiy specific object propTypes
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool // Bool === Boolean
    })
}

export default Image
