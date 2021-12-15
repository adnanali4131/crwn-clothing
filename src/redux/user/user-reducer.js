// import the case value from the type
import { UserActionTypes } from './user.type'
// we make the initial state where we make a defult state here
const INITIAL_STATE = {
  currentUser: null,
}

// set the defult value to the state, if the state is undefine it will get the INITIAL_state values
// spread everything fom the state and only care abou the value we want that is the current user value

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
// add into the root reducer bcz we have our first reducer
