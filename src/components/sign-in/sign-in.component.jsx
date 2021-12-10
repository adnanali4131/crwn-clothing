import React from 'react'
import './sign-in.style.scss'

// importing custom button replace the input into the custom button
import CustomButton from '../custom-button/custom-buttom.component'

// importing fire base
import { signInWithGoogle } from '../../firebase/firebase.utils'

// replace the input with form input, on change add the handelchange that we are importing bcz that the name we decied to call our proprity,add our labelfrom the sign in
import FormInput from '../form-input/form-input.component'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefult()

    this.setState({ email: '', password: '' })
  }

  handleChange = (event) => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2> I already have an account</h2>
        <span>Sign in with your Email and Password </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn

// signInWithGoogle pass the parameter that is google sign in then it will get the conditionaly get the class that we writen in the custom button
