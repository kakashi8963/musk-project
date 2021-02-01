import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) => {

    const publishableKey = 'pk_test_51IFvpmCLlo4Piq0hWrqVjjJkFomC3YlOeQfcBQcKsCJhcv7aNFtCtDkEeAcpVKOoo2SDTGMlJ4rVXYMcudOQdBsD00jNnboZQO';
    const onToken = token  =>{
        alert('payment successful');
    }

return(
    <StripeCheckout
    label='Pay Now'
name='MUSK HANDICRAFTS'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={price}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
);

};

export default StripeCheckoutButton;