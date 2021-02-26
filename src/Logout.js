import {Component} from 'react';

class Logout extends Component{

    componentDidMount(){
        localStorage.removeItem('tokenId');
        this.props.history.push('/');
    }
render(){
    return(
        <h3>Logged - Out</h3>
    )
}
}
export default Logout;