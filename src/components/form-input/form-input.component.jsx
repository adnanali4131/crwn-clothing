import React from 'react'
import './form-input.style.scss'
// all the other props from the sign in gett there  like name,type,value
// in label if there is a label then run the label other wise null it(if there is a label  )
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />

    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        }form-input-label `}
      >
        {label}
      </label>
    ) : null}
  </div>
)

export default FormInput

// add it in sign in component
