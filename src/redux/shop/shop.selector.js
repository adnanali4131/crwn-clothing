// every time we connect we need the selectors
import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

const selectShop = (state) => state.shop

export const selectCollections = createSelector(
  [selectShop],
  (shope) => shope.collections,
)

// use in collection over view component
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key]),
)

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam],
  ),
)
