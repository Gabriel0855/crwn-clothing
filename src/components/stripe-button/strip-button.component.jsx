import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_RTXzgA1h4ZWdIeyHDzwqYfzd00PSoozxyA'
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing LTD'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
         />
)}

export default StripeCheckoutButton;