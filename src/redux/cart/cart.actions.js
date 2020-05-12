import {CartActionTypes} from './cart.types';

export const toggleCartHidden = (hidden) => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})