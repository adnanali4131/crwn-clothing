import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import shopPage from './pages/shop/shope.component'

import './App.css'
import HomePage from './pages/homepage/homepage.components'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={shopPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
