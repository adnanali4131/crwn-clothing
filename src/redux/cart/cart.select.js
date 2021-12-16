// import the cart selector for the reuseable component
import { createSelector } from 'reselect'

// this variable take the whole state and give only the piece that we want,
const selectorCart = (state) => state.cart

// here we export the selectCartItems which is the proprity of cart items(inside the cart)
export const selectCartItems = createSelector(
  [selectorCart],
  (cart) => cart.cartItems,
)

// create the cart item count selector(from cart icon)(selectCartItemsCount=selectCartItems)
// export it to the cart icon
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0,
    ),
)
