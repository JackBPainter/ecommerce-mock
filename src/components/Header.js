import React from "react"
import 'remixicon/fonts/remixicon.css'
import { Link } from "react-router-dom";
import { AppContext } from "../Context"

const Header = () => {
    const { cartItems } = React.useContext(AppContext)

    const headerCartIcon = cartItems.length > 0 ? 
        "ri-shopping-cart-fill" :
        "ri-shopping-cart-line"

    return (
        <header>
            <Link to="/">
                <h2>Pic Some</h2>
            </Link>
            <Link to="/cart">
                <i className={`${headerCartIcon} ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}

export default Header
