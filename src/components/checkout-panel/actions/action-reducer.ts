import { CHECKOUT_REQUEST, CHECKOUT_POST_SUCCESS, CHECKOUT_POST_FAILURE, CheckoutActionTypes } from './action-type';

interface CheckoutState {
    loading: boolean;
    error: string | null;
}

const initialState: CheckoutState = {
    loading: false,
    error: null,
};

const checkoutReducer = (state = initialState, action: CheckoutActionTypes): CheckoutState => {
    switch (action.type) {
        case CHECKOUT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case CHECKOUT_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            };
        case CHECKOUT_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default checkoutReducer;
