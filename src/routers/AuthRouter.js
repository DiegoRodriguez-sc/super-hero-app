import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginScreen from '../pages/LoginScreen';

import "../styles/login-register.css"

const AuthRouter = () => {
 return (
  <div className="text-center auth">
  <div className="form-signin">
    <Switch>
      <Route  path="/auth/login" component={ LoginScreen } />

      <Redirect to="/auth/login" />
    </Switch>
  </div>
</div>
 );
}

export default AuthRouter;
