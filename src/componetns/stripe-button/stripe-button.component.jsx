import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey = 'pk_test_51JospnApX498Quui0QoBVwwPMwFP9c1Z5aArw8KV1SUGLHFzp31cjrL2mq5dBPog0MeDDRJdv7Cc7pQdHWzGetOV004Tf9DYHl';

  const onToken = token => {
    console.log('token: ', token);
    alert('Payment successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='httpps://svgshare.com/i/CUz.svg'
      description={`Yout total is $${price}.`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishKey}
    />
  )
};

export default StripeCheckoutButton;
