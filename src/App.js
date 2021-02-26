import Adduser from './Adduser.js';
import Login from './Login.js';
import Home from './Home.js';
import Logout from './Logout.js';
import Change_pwd from './Change_password.js';
import ForgetPassword from './ForgetPassword.js';
import VerifyOtp from './Verify-otp';
import './App.css';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Switch>
      <Route exact path = '/add' component={Adduser} />
      <Route exact path = '/' component={Login} />
      <Route exact path = '/Home' component={Home} />
      <Route exact path = '/Logout' component={Logout} />
      <Route exact path = '/changep' component={Change_pwd} />
      <Route exact path = '/forget' component={ForgetPassword} />
      <Route exact path = '/verifyOTP' component={VerifyOtp} />
    </Switch>
    </>
  );
}

export default App;
