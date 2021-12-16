import React from 'react'

import './cart-ite.style.scss'

const cartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} * ${price}
      </span>
    </div>
  </div>
)

// export it to the dropdown bcz we need it in the dropdown place
export default cartItem
