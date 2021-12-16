import React from 'react'
// connet the redux to the card-dropdown
import { connect } from 'react-redux'
// import the selector from the redux selector
import { selectCartItemsCount } from '../../redux/cart/cart.select'

import { toggleCartHidden } from '../../redux/cart/cart.action'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss'
// here we able ot access to toggle cart hidden
// bind it with onClick event
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> {itemCount} </span>
  </div>
)
// in span we have the total number
// add the map dis patch this fuction is called when the dispatch is run
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})
// add the new page on click, we add the accumalatedQuantity in the reduce function use in JS(thses cartItems we get ffrom the cart Reducers)
const mapStateToProps = (state) => ({
  // computating the value base of the state(we passing the whole reducer state into the selector which goes and check what type of selection it needs)
  itemCount: selectCartItemsCount(state),
})

// export this function to the header component bcz we wana place it to the header
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
