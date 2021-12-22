import React from 'react'

import { CustomButtonContainer } from './custom-button.style'

// here we added the input type submit in signinFOrm but both the button and input have Onsubmit, so we pass the value as the children that are the props in over CustomButton, and all the other props we spred that on our custom button
// now if we type submit on the custom button it will get that
// then we put chlidren inside of it
// childran is the label that we add <button>Sign IN</button> sign In isthe childran

// we add the google sign in as a props  and add the conditional here {in the class name  is there is sign in or empty } and always render the custom-button
//we render the google sign in class if its true other wise its empty

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
)
export default CustomButton
// exporting it to the signin bcz now it will change the input into the button on submit
