import actionTypes from '../types';

const initialState = 0;

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INCREASE_NUMBER: 
            return state + 1;
        case actionTypes.DECREASE_NUMBER:
            return state - 1;
        default: 
            return state;
    }
}