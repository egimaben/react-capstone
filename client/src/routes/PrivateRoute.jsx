import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isLoggedIn } from '../utils/isLoggedIn';

class PrivateRoute extends React.Component {

  render() {
    const {component:Component,...rest} = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isLoggedIn() ?
            <Component {...props} />
            : (
              <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
        }
      />
    )
  }
}

export default PrivateRoute