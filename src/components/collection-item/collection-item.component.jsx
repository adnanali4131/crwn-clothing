import React from 'react'
// import the binding
import { connect } from 'react-redux'
import './collection-item.style.scss'
// add the custom botton
import CustomButton from '../custom-button/custom-buttom.component'
// here we have the new add item collecion we made
import { addItem } from '../../redux/cart/cart.action'
// add items into the props
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url( ${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  )
}

// add the mapdispatch wehere the props we add as the payload and add it to the dispatch
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})
// add the inverted key and it will get that style
// we are not taking any props so we use null
export default connect(null, mapDispatchToProps)(CollectionItem)
