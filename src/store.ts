import { configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';

import commonReducer, { commonInitialState } from './slices/common-slice';
import offerConfigReducer, { offersInitialState } from './slices/offers-slice';
import checkoutReducer, { checkoutInitialState } from './slices/checkout-slice';
import selectedOfferReducer, { selectedOfferInitialState } from './slices/chosen-offer-slice';

const store = configureStore({
    reducer: {
        checkout: checkoutReducer,
        common: commonReducer,
        offers: offerConfigReducer,
        selected: selectedOfferReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch & ThunkDispatch<RootState, null, AnyAction>;

export const RootInitialState: RootState = {
    checkout: checkoutInitialState,
    common: commonInitialState,
    offers: offersInitialState,
    selected: selectedOfferInitialState,
};

export default store;
