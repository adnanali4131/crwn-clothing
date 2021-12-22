import React from 'react'
// add the redirector it will redirect our page when thy eisgn in
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
// working with the redux the current user change state will change
import { connect } from 'react-redux'
import Header from './components/header-component/header-component'

import './App.css'
import HomePage from './pages/homepage/homepage.components'
import shopPage from './pages/shop/shope.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-Up/sign-in-and-sign-up'
import CheckoutPage from './pages/checkout/checkout.component'

// import the set current user from the user action
import { setCurrentUser } from './redux/user/user.action'
// for multipale selector
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'
// add auth from the fire base,use it we cnage the function into the class component
// also export this auth to the  header page bcz there is we create the SignOut button
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
// here we add the set dispatch value so we dont neend the constructor
class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    // set the values to the props so we use it
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        // here we set the set state with the props
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          })
          console.log(this.state)
        })
      } else {
        setCurrentUser(userAuth)
      }
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
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={shopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Switch>
        </div>
      </Router>
    )
  }
}
// TO WORK with the react Redirect we need the current user from redock state,the page we dont wana show render it like we render the signIN,Up page
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

//here dont need the new store value
// dispatch the setCurrentUser where we pass the user from user action(invocking the user with the user that is in the user-action folder)
// here we are just dispatching the object
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

// add app to the out come to the connect app,pass null bcz we dont need any value props from our reducers
// export default connect(null, mapDispatchToProps)(App)

// instid of null we add the mapstate bcz it render direct to the page
export default connect(mapStateToProps, mapDispatchToProps)(App)
