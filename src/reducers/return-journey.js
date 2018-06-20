import { CHANGE_TAB } from '../constants';

export default (state = false, action) => {
    switch (action.type) {
        case CHANGE_TAB:
            return action.payload === 1;
        default:
            return state;
    }
};