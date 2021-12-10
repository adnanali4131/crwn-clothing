import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import HomePage from './pages/homepage/homepage.components'
import shopPage from './pages/shop/shope.component'
import Header from './components/header-component/header-component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-Up/sign-in-and-sign-up'

// add auth from the fire base,use it we cnage the function into the class component
// also export this auth to the  header page bcz there is we create the SignOut button
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  // add the current user into the header becz we are signOut it
  render() {
    return (
      <Router>
        <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={shopPage} />
            <Route path="/signin" component={SignInAndSignUpPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
