import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { createStructuredSelector } from 'reselect';
import { withRouter, useHistory } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toogleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {

    let history = useHistory();
    const dispatch = useDispatch();
    
    const getCartItems = useSelector(selectCartItems);
    
    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            getCartItems.length ? (
                getCartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <span className='empty-message'>Your cart is empty</span>
            )
        }
        </div>
        <CustomButton 
            onClick={() => {
                history.push('/checkout')
                dispatch(toogleCartHidden())
            }}>
                GO TO CHECKOUT
        </CustomButton>
    </div>
)}

/* const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
}) */


export default withRouter(CartDropdown);