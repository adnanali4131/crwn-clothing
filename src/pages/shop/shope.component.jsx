import React from 'react'
import SHOP_DATA from './shope.data'
import CollectionPreview from '../../components/preview-collection.components/collection-preview'

class shopPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: SHOP_DATA,
    }
  }

  render() {
    const { collections } = this.state
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}

export default shopPage
