import {
    CHANGE_TAB,
    CHANGE_DEP_DATE,
    CHANGE_RET_DATE,
    CHANGE_PRICE_RANGE,
    SET_FLIGHT_RESULT
} from './constants';

import { get } from './api/api';

export const changeTab = (payload) => ({ type: CHANGE_TAB, payload });

export const changeDepDate = (payload) => ({ type: CHANGE_DEP_DATE, payload });

export const changeRetDate = (payload) => ({ type: CHANGE_RET_DATE, payload });

export const changePriceRange = (value, initResult) => ({ 
    type: CHANGE_PRICE_RANGE, 
    payload: { price: value, initResult } 
});

export const setFlightResult = (payload) => ({ type: SET_FLIGHT_RESULT, payload });

export const searchFlights = (origin, dest, depDate, retDate, refinedPrice) => (dispatch, getState) => {
    get('/flights?origin=' + origin + '&dest=' + dest
        + '&depDate=' + depDate + '&retDate=' + retDate
        + '&refinedPrice=' + refinedPrice,
        (res) => {
            dispatch(setFlightResult(res));
        }
    );
};