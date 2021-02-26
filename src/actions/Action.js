import {AUTH_USER, ADD_ERROR, ADD_SUCCESS, CHANGE_SUCCESS, CHANGE_ERROR, FORGET_EMAIL, FORGET_EMAIL_ERROR, FORGET_LOADING, VERIFY_OTP, VERIFY_OTP_SUCCESS, VERIFY_OTP_ERROR} from './ActionType.js';

export const auth_user = (response)=>{
    return{
    type: AUTH_USER,
    payload : response.data.token
    }
}

export const add_success = (data)=>{
    return{
        type: ADD_SUCCESS,
        payload : data
    }
}
export const add_error = (error)=>{
    return{
        type: ADD_ERROR,
        payload :error.message
    }
}

export const changep = data =>{
    return{
        type : CHANGE_SUCCESS,
        payload : data
    }
}

export const changeErr = err =>{
    return{
        type : CHANGE_ERROR,
        payload : err
    }
}
export const forget_loading = () =>{
    return{
        type : FORGET_LOADING,
    }
}

export const forget_email = data =>{
    return{
        type : FORGET_EMAIL,
        payload : data
    }
}
export const forget_email_error = err =>{
    return{
        type : FORGET_EMAIL_ERROR,
        payload : err
    }
}
export const verify_otp = ()=>{
    return{
        type : VERIFY_OTP
    }
}
export const verify_otp_success = data =>{
    return{
        type : VERIFY_OTP_SUCCESS,
        payload : data
    }
}
export const verify_otp_error = err =>{
    return{
        type : VERIFY_OTP_ERROR,
        payload : err
    }
}