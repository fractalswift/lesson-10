import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  // price needs to be in cents
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51H9X3VEgBVLtF8U8skTjLOgNAvkDvIYhylGc5NVZ2yl5olzPNKzqmd91zFnZuoHzVauSQL4W81UrwVzKQ9hWGwsL00mn3IBjG3';

  const onToken = (token) => {
    console.log('token');
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN clothing co'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
