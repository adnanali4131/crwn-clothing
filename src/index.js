import React from 'react'
import ReactDOM from 'react-dom'

// add the provider from react redux
import { Provider } from 'react-redux'
import store from './redux/store'

import './index.css'
import App from './App'
// in provider we pass the store so all the app get the store proprity
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
