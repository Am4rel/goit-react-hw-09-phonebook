import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as selectors from '../redux/auth/auth-selectors';

const PublicRoute = ({
  component: Component,
  redirectTo,
  ...routeProps
}) => {
  const isAuthenticated = useSelector(state => selectors.isAuthenticated(state));
  return <Route
    {...routeProps}
    render={props =>
      isAuthenticated ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
};


export default PublicRoute;