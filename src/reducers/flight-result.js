import { SET_FLIGHT_RESULT, CHANGE_TAB, CHANGE_PRICE_RANGE } from '../constants';

const R  = require('ramda');

export default (state = { arr: [] }, action) => {
    switch (action.type) {
        case SET_FLIGHT_RESULT:
            return action.payload;
        case CHANGE_TAB:
            return { arr: [] };
        case CHANGE_PRICE_RANGE:
            const newState = R.clone(action.payload.initResult)
            newState.arr = newState.arr
                .filter(d => (d.up && d.down ? d.up.fare + d.down.fare : d.fare) <= action.payload.price);
            return newState;
        default:
            return state;
    }
};