import { SET_FLIGHT_RESULT, CHANGE_TAB } from '../constants';

const R  = require('ramda');

export default (state = { arr: [] }, action) => {
    switch (action.type) {
        case SET_FLIGHT_RESULT:
            return R.clone(action.payload);
        case CHANGE_TAB:
            return { arr: [] };
        default:
            return state;
    }
};