import React, { useContext, useState } from "react"
import {AppContext} from "../Context";
import CartItem from "../components/CartItem"

const Cart = () => {
    const {cartItems} = useContext(AppContext)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ))
 
    const totalCost = () => {
        const total = cartItems.length * 5.99
        return total.toLocaleString("en-UK", {style: "currency", currency: "GBP"})
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost()}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart