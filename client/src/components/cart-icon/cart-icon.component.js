import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss'

const CartIcon = () => {

    const dispatch = useDispatch()

    const getCartItemsCount = useSelector(selectCartItemsCount)


    return (
        <div className='cart-icon' onClick={() => dispatch(toogleCartHidden())}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{ getCartItemsCount }</span>
        </div>
    )
}

/* const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
}) */

export default CartIcon;