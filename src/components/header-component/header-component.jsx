import React from 'react'
import { Link } from 'react-router-dom'
import './header.style.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'

// adding the auth

import { auth } from '../../firebase/firebase.utils'

// DESTUCTURE THE CURRENT USER that we are geting from over app
const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-contianer" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>

      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
)
// on click (signout) privided to us by fire base libaray
// Add the curent user here if there is a div it will pass it out other wise it pass the link(using ternary oprator)
export default Header
