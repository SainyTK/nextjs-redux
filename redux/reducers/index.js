import { combineReducers } from 'redux';
import numberReducers from './numberReducers';

export default combineReducers({
    number: numberReducers,
});