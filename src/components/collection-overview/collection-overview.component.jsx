import React from 'react'
import './collection-overview.style.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../preview-collection.components/collection-preview'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)
