import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Forget} from './Fetch.js';
import { Redirect } from 'react-router';
import VerifyOtp from './Verify-otp';

class ForgetPassword extends Component{

    constructor(props){
        super(props);
        this.state = {
            forgetEmail : ""
        }
    }

    componentDidUpdate(){
       if(this.props.Status){
           this.props.history.push('/verifyOTP');
       }
    }
    onChangeInput=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }
    
    submitFunc=(e)=>{
        e.preventDefault();
        this.props.Forget(this.state.forgetEmail);
    }
    render(){
        const otpStatus = this.props.Status;
        const {Loading,Status, Message, Error} = this.props;
        if(Loading){
            return(
                <div className='container mt-5'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-4 text-center'>
                            <p className='alert alert-info font-weight-bold'>Generating OTP</p>
                        </div>
                    </div>
                </div>
            )
        }
        return(
            
            <div className='container text-center p-4 mt-5'>
                <div className='row d-flex justify-content-center'>
               
                   <div className='col-md-5 border-sm p-4'>
                   <h3 className='text-center text-secondary mb-4'>Forget Password</h3>
                    <form onSubmit={this.submitFunc}>
                        <div className='form-group'>
                        <input className='my-3 form-control form-control-sm'
                        placeholder='Enter Email Address'
                        name='forgetEmail'
                        onChange={this.onChangeInput}
                        type='email'
                         />
                        <button className='btn btn-block btn-sm btn-info'>Send Verification Code</button>
                        </div>
                    </form>
                    <span className='font-weight-bold font-italic text-info'>{Status}</span>
                    <span className='font-weight-bold font-italic text-info'>{Loading}</span>
                    <span className='font-weight-bold font-italic text-success'>{Message}</span>
                    <span className='font-weight-bold font-italic text-danger text-center'>{Error}</span>
                   </div>
               </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        Loading : state.Forget_r.loading,
        Status : state.Forget_r.status,
        Message : state.Forget_r.message,
        Error : state.Forget_r.error
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        Forget : (data)=> dispatch(Forget(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);