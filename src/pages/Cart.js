import React, { useContext, useState } from "react"
import {AppContext} from "../Context";
import CartItem from "../components/CartItem"

const Cart = () => {
    const [buttonText, setButtonText] = useState("Place Order")
    const {cartItems, setCartItems} = useContext(AppContext)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ))
 
    const totalCost = () => {
        const total = cartItems.length * 5.99
        return total.toLocaleString("en-UK", {style: "currency", currency: "GBP"})
    }

    const placeOrderButton = () => {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order Placed!")
            setButtonText("Place Order")
            setCartItems([])
        }, 3000) 
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost()}</p>
            <div className="order-button">
            {cartItems.length > 0 &&
            <button onClick={placeOrderButton}>{buttonText}</button>
            }
            </div>
        </main>
    )
}

export default Cart