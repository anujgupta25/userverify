import React, { Component } from 'react';
import './App.css';
import {LoginUser} from './Fetch.js';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
 
    class LoginForm extends Component{
    
        constructor(props){
            super(props);
            this.state = {
                email :'',
                password : ''
            }
        }

        static propTypes = {
            match: PropTypes.object.isRequired,
            location: PropTypes.object.isRequired,
            history: PropTypes.object.isRequired
          };

        componentDidMount(){
            const {email,password} = this.state;
            const {User_info, error, Auth, token} = this.props;
        }

        componentDidMount(){
            if(localStorage.getItem('tokenId')){
                this.props.history.push('/Home');
            }
        }

     onInputChange = (e)=>{
        this.setState({[e.target.name]: e.target.value})
      }
        
     submitFunc =(e)=>{
        e.preventDefault();
        this.props.LoginUser(this.state.email, this.state.password);
        this.props.history.push('/Home');
        setTimeout(()=>{window.location.reload()}, 100);
        // window.location.reload();
        }

     
     renderAlert(){
        if(this.state.email=='' && this.state.password==''){
            return (
                <div className="alert alert-danger">
                 <span>All fields are mandatory !</span>
                </div>
              );
        }
     }
     
    render(){
    return(
        <div className='container mt-5 bg-white '>
        <form onSubmit={this.submitFunc}>
            <div className='row d-flex justify-content-center '>
            <div className='col-md-4 border-sm rounded p-3'>
            <div className='text-center font-weight-bold text-success'>{this.props.forgetSuccess}</div>
            {/* <div className='alert alert-danger'>{this.internalError()}</div> */}

            <h4 className='my-4 text-center text-muted'>Log in</h4>
            <div className='form-group'>
            <label for='userid'><small> Email </small></label>
            <input type='email'
             className='form-control' 
             name='email'
             onChange={this.onInputChange}
              />
            </div>

            <div className='form-group'>
            <label for='password' className='input-label'><small>{/* {user.tokenValue} */}password</small></label>
            <input type='password'
            className='form-control'
            name='password'
            onChange = {this.onInputChange}
               />
            </div> 
            <Link  to='/forget'><span className='font-weight-bold text-primary float-right mb-2 mt-n2'> Forget Password ?</span> </Link>
             <button className='btn btn-primary btn-block' type='submit'>Login</button> <br />
             {/* <small><span id='errmsg' className='text-danger  font-weight-bold'>{result.data.message}</span></small> */}
             {/* <small>{this.renderAlert()}</small> */}
           </div>
           </div>
           </form>
           
           </div>
               
      )
    }
}
const mapStateToProps = (state) =>{
    return{
    User_info : state.Auth_r.user_info,
    Error : state.Auth_r.error,
    Auth : state.Auth_r.Authenticated,
    forgetSuccess : state.otp_r.message
    
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        LoginUser : (email,password) => dispatch(LoginUser(email,password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);