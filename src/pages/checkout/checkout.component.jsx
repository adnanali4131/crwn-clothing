import React from 'react'
import './checkout.style.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItem, selectCartTotal } from '../../redux/cart/cart.select'

import CheckoutItem from '../../components/checkout-item/checkout-item'
// stripe
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">Total: ${total}</div>
    <div className="test-warning">
      *Please use the following test credit card details
      <br />
      4242 4242 4242 4242 -Exp:01/20 -CVV:123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
)
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage)
