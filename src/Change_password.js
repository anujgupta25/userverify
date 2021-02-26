import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Changep}  from './Fetch.js';

class Change_pwd extends Component{

  constructor(props){
    super(props);
    this.state = {
      pass:'',
      newpass: '',
      cpass : ''
    }
  }

  componentDidMount(){
      const {pass,newpass, cpass} = this.props;
    }
  
  componentDidMount(){
    if(localStorage.getItem('tokenId')==null || localStorage.getItem('tokenId')== ''  ){
      this.props.history.push('/')
    }
  }

  componentDidUpdate(){
    if(this.props.ChangeSuccess =='Password Updated Successfully !'){
        this.props.history.push('/Home')
    }
}

  onInputChange = (e)=>{
    this.setState({[e.target.name] : e.target.value})
  }

  submitFunc = (e)=>{
    e.preventDefault();
    this.props.Changep(this.state.pass, this.state.newpass, this.state.cpass, localStorage.getItem('tokenId'));
  }
  render(){
        return(
            <div className='container mt-5 bg-white '>
        <form>
        <span className='text-danger text-center'>{this.props.ChangeSuccess}</span>
         <div className='row d-flex justify-content-center '>
            <div className='col-md-4 border-sm rounded p-3'>
            {/* <div className='alert alert-danger'>{this.internalError()}</div> */}

            <h4 className='my-4 text-center text-muted'>Change Password</h4>
            <div className='form-group'>
            <input type='password'
            placeholder='Enter Current password'
             className='form-control' 
            name='pass'
            onChange={this.onInputChange}
              />
            </div>
            <div className='form-group'>
            <input type='password'
            placeholder='Enter New password'
             className='form-control' 
            name='newpass'
            onChange={this.onInputChange}
              />
            </div>
            <div className='form-group'>
            <input type='password'
            placeholder='Confirm New Password'
             className='form-control' 
            name='cpass'
            onChange={this.onInputChange}
              />
            </div>
            <button className='btn btn-sm btn-block btn-danger' onClick ={this.submitFunc}>Change password</button>
            </div>
            </div>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state =>{
  return{
    ChangeSuccess : state.Change_r.success
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    Changep : (pass, newpass, cpass, token) => dispatch(Changep(pass, newpass, cpass,token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Change_pwd);