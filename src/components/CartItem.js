import React, { useContext } from "react"
import { AppContext } from "../Context"
import useHover from "../hooks/useHover";
import PropTypes from "prop-types"

const CartItem = ({ item }) => {
    const { removeFromCart } = useContext(AppContext)
    const [hovered, hoverRef] = useHover()

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i
                className={iconClassName}
                onClick={() => removeFromCart(item.id)}
                ref={hoverRef}
            >
            </i>
            <img src={item.url} width="130px" alt="" />
            <p>£5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem
