import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import CartItem from '../cart-item/cart-item.component';
const StripeCheckoutButton =({price,cartItems}) => {

    const publishableKey = 'pk_test_51IMGndHtDdP2J9NkKBS3NgQzVyqeMCF0qnp6sgfyHF7EEyGI8WkveQPhFOYlxVZ6btPpJ55seb3Jz7YBqvtvO4xk004j6kKIzA';
   var items = {};
   cartItems.forEach(CartItem=> items[CartItem.name]=CartItem.quantity)
    const onToken = token  =>{
        axios({
            url:'payment',
            method:'post',
            data:{
amount:price*100,
items:items,
token
            }
        }).then(response =>{
            alert('Payment Successful')
        }).catch(error=>{
            console.log('Payment error:',JSON.parse(error));
            alert(
                'There is some issue with your payment'
            )
        })
    };
    

return(
    <StripeCheckout
    currency='INR'
    label='Pay Now'
name='MUSK HANDICRAFTS'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is RS ${price}`}
    amount={price*100}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
);

};

export default StripeCheckoutButton;