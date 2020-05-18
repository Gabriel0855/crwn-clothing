import {call, all, put, takeLatest} from 'redux-saga/effects';
import { CartActionTypes } from './cart.types';

export function* clearCart() {
        yield put(clearCart());
}

export function* onClearCart () {
    yield takeLatest(CartActionTypes.CLEAR_CART, clearCart)
}

export function* cartSagas() {
    yield all([onClearCart])
}