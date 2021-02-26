import {
      userRequest, 
      userSuccess, 
      userError,
      add_success,
      add_error,
      auth_user,
      changep,
      changeErr,
      forget_loading,
      forget_email,
      forget_email_error,
      verify_otp,
      verify_otp_success,
      verify_otp_error
    }  from './actions/Action.js';
import {AUTH_USER, AUTH_ERROR} from './actions/ActionType.js';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
// import {store} from './store/Store.js';

export const LoginUser = (email,password)=>{
    return function(dispatch){
        axios.post('http://localhost/vehicle-api/loginCheckNew.php',{userid:email, password:password})
      .then(response => {
        dispatch(auth_user(response))
        console.log(response.data)
        localStorage.setItem('tokenId',response.data.token)
      }).catch(()=>{
        dispatch({
            type : AUTH_ERROR,
            payload : "Invalid Credentials"
        });
      });
    }
  }

  export const AddUser = (fname, lname, email, password, phone)=>{
    return async function(dispatch){
        await axios.post('http://localhost/vehicle-api/adduser.php',{first_name:fname, last_name: lname, email:email, password:password, phone:phone})
      .then(response => {
        dispatch(add_success(response.data));
        console.log(response); 
        // alert(`${response.data.token}`);
      }).catch((error)=>{
        dispatch(add_error(error));
      });
    }
  }

  export const Changep = (pass, newpass, cpass, token)=>{
    return async function(dispatch){
        await axios.post('http://localhost/vehicle-api/changePassword.php',{pass:pass, newpass: newpass, cpass:cpass, token:token})
      .then(response => {
        dispatch(changep(response.data));
        console.log(response.data); 
        // alert(`${response.data.token}`);
      }).catch((error)=>{
        dispatch(changeErr(error));
      });
    }
  }

  //forget password function
  export const Forget = (email)=>{
    return async function(dispatch){
      dispatch(forget_loading());
      await axios.post('http://localhost/vehicle-api/Forgetpassword.php',{forgetEmail:email})
      .then(response=>{
        dispatch(forget_email(response.data));
        localStorage.setItem('emailToken', response.data.emailToken);
        dispatch(forget_email_error(response.data.error));
        console.log(response.data);
      }).catch((response)=>{
        console.log('Some Internal Error');
         });
    }
  }
// after forget password, will redirect to verify otp function
  export const Verify_Otp = (email, otp, newpass, cpass) =>{
    return async function(dispatch){
      dispatch(verify_otp());
      await axios.post('http://localhost/vehicle-api/Check-otp.php',{email:email, otp:otp, newpass:newpass, cpass:cpass})
      .then(response=>{
        dispatch(verify_otp_success(response.data));
        console.log(response.data);
        dispatch(verify_otp_error(response.data.error))
      }).catch((err)=>{
        console.log(err);
      })
    }
  }