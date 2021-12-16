// import the cart action
import CartActionTypes from './cart.types'
// import the utilies
import { addItemToCart, removeItemFromCart } from './cart.utils'
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
        // add the state items and action(that action we want to add on the pay load)(these are use in to the cart-icons to change the chnages in it )
        cartItems: addItemToCart(state.cartItems, action.payload),
      }

    // remove side by side(here the updated cart item geting by the utils function )
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      }

    // remove the item(bind it with check out component)
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id,
        ),
      }

    default:
      return state
  }
}

export default cartReducer
