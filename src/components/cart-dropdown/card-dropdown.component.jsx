import React from 'react'
import './cart-dropdown.style.scss'
import CustomButton from '../custom-button/custom-buttom.component'

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

// EXPORT THE CART to the header bcz theres the drop down will work

export default CartDropdown
