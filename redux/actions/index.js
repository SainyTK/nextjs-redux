import actionTypse from '../types';

export const increaseNumber = () => dispatch => {
    dispatch({
        type: actionTypse.INCREASE_NUMBER
    })
}

export const decreaseNumber = () => dispatch => {
    dispatch({
        type: actionTypse.DECREASE_NUMBER
    })
}