// import the cart acion
import CartActionTypes from './cart.types'

// export this action to the palce wher eit run as cart-icon component
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

// add the cart item action
// we have the type we are adding itm,
// also have the payload which may any type of it but here we are using the action(it is the pay load of the reducer case 2)
export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
})

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
})

// ADD REMOVE SIDE BY SIDE
export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
})
