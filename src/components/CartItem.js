import React, { useContext, useState } from "react"
import { AppContext } from "../Context"

const CartItem = ({item}) => {
    const [hovered, setHovered] = useState(false)
    const {removeFromCart} = useContext(AppContext)

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
                <i 
                    className={iconClassName}
                    onMouseEnter={() => setHovered(true)} 
                    onMouseLeave={() => setHovered(false)} 
                    onClick={() => removeFromCart(item.id)}>
                </i>
            <img src={item.url} width="130px" alt=""/>
            <p>£5.99</p>
        </div>
    )
}

export default CartItem