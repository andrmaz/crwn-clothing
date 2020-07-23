import React from 'react';
import { useSelector } from 'react-redux';
// import {createStructuredSelector } from 'reselect';

import CheckoutItem  from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import { 
    selectCartItems, 
    selectCartTotal 
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = () => {

    const getCartItems = useSelector(selectCartItems)
    const getTotal = useSelector(selectCartTotal)

    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Decription</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {getCartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className='total'>
                <span>TOTAL: ${getTotal}</span>
            </div>
            <div className='test-warning'>
                *PLease use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
            </div>
            <StripeCheckoutButton price={getTotal}/>
        </div>
    )
}

/* const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
}) */

export default CheckoutPage;