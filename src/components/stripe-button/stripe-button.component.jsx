import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51K8iVXAqDLhofKFYSfxFQ2IIOlrSWBShZ2ul0zvsP99JeeHvtofxNqViZ4EDriacWR7EwIPL6BJKxdpXB6arsTmU00TIZZXMgr'

  // we are processing the pay ment so
  const onToken = (token) => {
    console.log(token)
    alert('payment successfull')
  }

  // here we return the stripe checkOut component, this check out have ability to enable,disble number of proprities
  return (
    <StripeCheckout
      label="Pay Now"
      name="Clown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
// export to the checkout component
