import React, { Component } from 'react';
// import {useHistory} from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import {AddUser} from './Fetch';
class Adduser extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            first_name : '',
            last_name : '',
            email : '',
            password :'',
            phone : ''
        }
    }
    
    componentDidMount(){
        const{first_name, last_name, email, password, phone} = this.state;
        document.title= "Add Users";
    }

    componentDidMount(){
        if(localStorage.getItem('tokenId') == null || localStorage.getItem('tokenId') ==""){
            this.props.history.push('/');
        }
    }

    componentDidUpdate(){
        if(this.props.AddSuccess=='Data Inserted Successful !'){
            this.props.history.push('/Home')
        }
    }


 onInputChange = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
    
 submitFunc = (e) =>{
    e.preventDefault();
    this.props.AddUser(this.state.first_name,this.state.last_name,this.state.email,this.state.password,this.state.phone)
    // await axios.post("http://localhost/vehicle-api/adduser.php", this.state);
}
render(){
    return(
        <div className='container mt-5 d-flex justify-content-center'>
             <div className='col-md-6 border shadow-sm p-4'>
                <h3 className='mb-4  text-center text-muted'>Add User</h3>
                <span className='text-danger'><small>{this.props.AddSuccess}</small></span> <br />
                <form>
                    <div className='form-group mt-2 form-group-sm'>
                        <input
                        type='text'
                        placeholder='First Name'
                        className='form-control'
                        name='first_name'
                        onChange={this.onInputChange}
                        required = 'required'
                        // value={name}
                         />
                    </div>

                    <div className='form-group form-group-sm'>
                        <input
                        type='text'
                        placeholder='last Name'
                        className='form-control'
                        name='last_name'
                        onChange={this.onInputChange}
                        required = 'required'
                        // value={name}
                         />
                    </div>

                    <div className='form-group form-group-sm'>
                        <input
                        type='text'
                        placeholder='Enter Email'
                        className='form-control'
                        name='email'
                        onChange={this.onInputChange}
                        required = 'required'
                        // value={name}
                         />
                    </div>

                    <div className='form-group form-group-sm'>
                        <input
                        type='password'
                        placeholder='Password'
                        className='form-control'
                        name='password'
                        onChange={this.onInputChange}
                        required = 'required'
                        // value={name}
                         />
                    </div>

                    <div className='form-group form-group-sm'>
                        <input
                        type='text'
                        placeholder='Mobile'
                        className='form-control'
                        name='phone'
                        onChange={this.onInputChange}
                        required = 'required'
                        // value={name}
                         />
                    </div>
                    <button onClick={this.submitFunc} className='btn btn-primary btn-block'>Submit</button>
                    </form>
            
                </div>
            
        </div>
     )
    }   
}
const mapStateToProps = state =>{
    return{
    AddSuccess : state.Add_r.added,
    AddErr : state.Add_r.error
    } 
}
const mapDispatchToProps = dispatch =>{
    return{
        AddUser : (fname, lname, email, password, phone) => dispatch(AddUser(fname, lname, email, password, phone))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adduser);