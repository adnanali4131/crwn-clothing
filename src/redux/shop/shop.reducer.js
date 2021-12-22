import SHOP_DATA from './shope.data'
import { updateCollections } from './shop.actions'

const INITIAL_STATE = {
  collections: SHOP_DATA,
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case updateCollections.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      }
    default:
      return state
  }
}

export default shopReducer
