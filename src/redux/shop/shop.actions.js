import ShopActionTypes from './shop.types'

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
})

// the reducer inticipate that action
