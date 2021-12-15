import React from 'react'
import './cart-dropdown.style.scss'
// here we need the item puu into the drop down so we add the store
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-buttom.component'
// import her the all drop down values
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)
// add map state to props
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
})

// EXPORT THE CART to the header bcz theres the drop down will work
export default connect(mapStateToProps)(CartDropdown)
