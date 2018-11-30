import React from 'react';

import { Switch, Route } from 'react-router-dom';

// Components
import Home from '../views/Home/Home';
import Login from '../views/Login/Login';
import Logout from '../views/Logout/Logout';
import PrivateRoute from './PrivateRoute';
const Routes = (props) => {
  return (
  <Switch>
    <Route path="/login" component={Login} exact/>
    <Route path="/logout" component={Logout} exact/>
    <PrivateRoute path="/" component={ Home } exact />     
  </Switch>
  );
};

export default Routes;