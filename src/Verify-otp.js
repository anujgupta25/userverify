import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Verify_Otp } from './Fetch';

class VerifyOtp extends Component{

    constructor(props){
        super(props);
        this.state = {
            otp : '',
            newpass :'',
            cpass : ''
        }
    }

    componentDidMount(){
        if(localStorage.getItem('emailToken') == null || localStorage.getItem('emailToken') == '' ){
            this.props.history.push('/forget');
        }
    }

    componentDidUpdate(){
        if(this.props.OtpStatus){
            this.props.history.push('/');
            localStorage.removeItem('emailToken');
        }
    }

    onChangeInput=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }
    submitFunc = (e) =>{
        e.preventDefault();
        this.props.Verify_Otp(localStorage.getItem('emailToken'),this.state.otp, this.state.newpass, this.state.cpass);
    }
    
    render(){
       
        return(
            <div className='container text-center p-4 mt-4'>
                <div className='row d-flex justify-content-center'>
                {/* showing errors */}
                               
                    <div className='col-md-4 border-sm p-4'>
                    <small className='text-danger'>{this.props.Error}</small>
                    <small className='text-success'>{this.props.Message}</small>
                    <small className='text-success'>{this.props.OtpMessage}</small>
                        <h5 className='my-3 text-secondary'>Verify OTP</h5>
                        <form onSubmit={this.submitFunc}>
                            <div className='form-group'>
                                <input className='form-control form-control-sm'
                                type='text'
                                name='otp'
                                onChange={this.onChangeInput}
                                placeholder='Enter OTP'
                                />
                            </div>
                                <br />
                            <h5 className='text-center my-3 text-secondary'>Set New Password</h5>
                            <div className='form-group'>
                                <input className='form-control form-control-sm'
                                type='password'
                                name='newpass'
                                onChange={this.onChangeInput}
                                placeholder='New Password'
                                />
                            </div>
                            <div className='form-group'>
                                <input className='form-control form-control-sm'
                                type='password'
                                name='cpass'
                                onChange={this.onChangeInput}
                                placeholder='Confirm Password'
                                />
                            </div>
                            <button className='btn btn-sm btn-block btn-warning text-white font-weight-bold'>Change Password</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{

    return{
        Loading :state.otp_r.loading,
        Status : state.otp_r.status,
        Message : state.otp_r.message,
        Error : state.otp_r.error,
        OtpMessage : state.Forget_r.message,
        OtpStatus : state.otp_r.status
    }
}
export const mapDispatchToProps = dispatch =>{
    return{
        Verify_Otp : (email, otp, newpass, cpass)=> dispatch(Verify_Otp(email,otp,newpass,cpass))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VerifyOtp);