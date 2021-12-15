import React from 'react'
import { Link } from 'react-router-dom'
import './header.style.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
// import connect to connect the header with the redux, they are the higher order components thy use the component as the argument and provide the sooped up cmponents
import { connect } from 'react-redux'
// adding the auth
import { auth } from '../../firebase/firebase.utils'
// import the cart-icon from thr cart and drop it at the very end
import CartIcon from '../cart-icon/cart-icon.component'
// import the drop down add it outside of the option div
import CartDropdown from '../cart-dropdown/card-dropdown.component'

// DESTUCTURE THE CURRENT USER that we are geting from over app
const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </div>

    {hidden ? null : <CartDropdown />}
  </div>
)
// on click (signout) privided to us by fire base libaray
// Add the curent user here if there is a div it will pass it out other wise it pass the link(using ternary oprator)
// export default Header

//to add the value we add the sate that is the root roducer
// here we have the name that is name of the proprity and the value we want to pass into the component
// export user from the root-reducer and the current user from the user
// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
// })
// for nusted value
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
})
// her ewe add the connet and the header as the argument because the header is the higher order component
export default connect(mapStateToProps)(Header)
