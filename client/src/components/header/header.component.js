import React from 'react';
import { useSelector } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import  CartIcon  from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';

const Header = () => {
    
    const getCurrentUser = useSelector(selectCurrentUser)
    const getCartHidden = useSelector(selectCartHidden)

    return(
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contacts'>
                CONTACT
            </OptionLink>
            {getCurrentUser ? (
                <OptionLink as='div' onClick={() => auth.signOut().then(function() {
                    console.log('Sign-out successful', auth)
                }).catch(function(error) {
                    console.log('An error happened', error)
                })}> 
                    SIGN OUT
                </OptionLink>
            ) : (
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
            )}
            <CartIcon />
        </OptionsContainer>
        {getCartHidden ? null : <CartDropdown />}
    </HeaderContainer>
)}

/* const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
}); */

export default Header;