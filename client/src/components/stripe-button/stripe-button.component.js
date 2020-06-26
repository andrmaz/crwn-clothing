import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GtZiiEChMqDecZeyYzxg2Bd3No4ptpaTz5210q63nBH0GZjcfIQAM7P5TEWsUGlf66Aw3TOryzMvai7aGfTVmmP00Ij4CWDIC'
    const onToken = token => {
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;