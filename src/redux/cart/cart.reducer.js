// import the cart action
import CartActionTypes from './cart.types'
// import the utilies
import { addItemToCart } from './cart.utils'
// add the item intoo the cart
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    //  new array where spread all the cart items and payload item in the last of the existing array that why we add the action payload
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // cartItems: [...state.cartItems, action.payload],
        // add the state items and action(that action we want to add on the pay load)
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    default:
      return state
  }
}

export default cartReducer
