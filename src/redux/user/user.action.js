// add the value of the single user as the user reduser is expecting
// also add the value of action type in the action
import { UserActionTypes } from './user.type'
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
})
