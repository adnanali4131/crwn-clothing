import React from 'react'
// connet the redux to the card-dropdown
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.action'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.style.scss'
// here we able ot access to toggle cart hidden
// bind it with onClick event
const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> 0 </span>
  </div>
)
// in span we have the total number
// add the map dis patch this fuction is called when the dispatch is run
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

// export this function to the header component bcz we wana place it to the header
export default connect(null, mapDispatchToProps)(CartIcon)
