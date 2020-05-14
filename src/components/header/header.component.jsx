import React from 'react';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from './header.styles';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden, selectCartItems} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

const Header = ({currentUser, hidden, cartItems}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {
                currentUser ?
                <OptionDiv onClick={() => { auth.signOut() }}>SIGN-OUT</OptionDiv>
                :
                <OptionLink to='/signin'>SIGN-IN</OptionLink>
            }
            <OptionLink><CartIcon /></OptionLink>
        </OptionsContainer>
        {
            hidden ? null :
            <CartDropdown cartItems={cartItems} /> 
        }
        
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(Header);