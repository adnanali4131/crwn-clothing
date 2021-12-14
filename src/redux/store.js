// here we add the middlewasre and store funtion from the redux
import { createStore, applyMiddleware } from 'redux'

// the middle ware use for debugging also
import logger from 'redux-logger'

// import the root reducer
import rootReducer from './root-reducer'

// adding the middle ware
const middlewares = [logger]

// create the store, we add the root reducres all of them and in middleware we spread or middlewares
// spread middle wares single add all the values to the applyMiddleWare and we get them indiviualy
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
// export this to index.js file where we wrap it at all
