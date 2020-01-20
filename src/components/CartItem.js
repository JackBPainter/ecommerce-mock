import React, { useContext } from "react"
import { AppContext } from "../Context"

const CarItem = ({item}) => {
    const {removeFromCart} = useContext(AppContext)
    console.log(item.id)
    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={() => removeFromCart(item.id)}></i>
            <img src={item.url} width="130px" alt=""/>
            <p>$5.99</p>
        </div>
    )
}

export default CarItem