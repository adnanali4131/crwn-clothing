// the root reducer have the over all reducers
// to combine all the educer we have the function called combine reducer
import { combineReducers } from 'redux'

import userReducer from './user/user-reducer'
// as we know the root is the big object wheres the key and values
// there is a keay and value key is the indiviual sclice
export default combineReducers({
  user: userReducer,
})
