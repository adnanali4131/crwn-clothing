import React from 'react'
import './cart-dropdown.style.scss'
// add the withrouter which is the hestory find component
import { withRouter } from 'react-router-dom'
// here we need the item puu into the drop down so we add the store
import { connect } from 'react-redux'
//import the selector here
import { selectCartItems } from '../../redux/cart/cart.select'
// bring the toggle hiden action to close the drop down
import { toggleCartHidden } from '../../redux/cart/cart.action'

import CustomButton from '../custom-button/custom-buttom.component'
// import her the all drop down values
import CartItem from '../cart-item/cart-item.component'
// connect automaticaly allow to accec the dipatch so we use it as an argument
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your are cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
)
// add map state to props
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// })
// instid of destucturing we want the whole state bcz we are using here the cart selector
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})

// EXPORT THE CART to the header bcz theres the drop down will work(add to with router)
export default withRouter(connect(mapStateToProps)(CartDropdown))
