import {add_reducer} from '../add_reducer.js';
import {auth_reducer} from '../auth_reducer.js';
import {Changep_reducer} from '../Changep_reducer.js';
import {combineReducers} from 'redux';
import {Forget_reducer} from '../Forget_reducer.js';
import {Verify_otp} from '../VerifyOtp_reducer.js';

export  const combineReducer = combineReducers({
    Auth_r : auth_reducer,
    Add_r : add_reducer,
    Change_r : Changep_reducer,
    Forget_r : Forget_reducer,
    otp_r : Verify_otp
});