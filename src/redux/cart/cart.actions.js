import CartActionTypes from './cart.types';

export const toogleCartHidden = () => ({
    type: CartActionTypes.TOOGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})