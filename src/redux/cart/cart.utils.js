export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id,
  )
  // map the cart item to make the new array, pass the condition if the id macth to the item add +1 other wise return the cart item
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    )
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
  }
}

//import it to the reducer
