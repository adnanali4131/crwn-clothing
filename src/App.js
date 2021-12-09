import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import HomePage from './pages/homepage/homepage.components'
import shopPage from './pages/shop/shope.component'
import Header from './components/header-component/header-component'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={shopPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
