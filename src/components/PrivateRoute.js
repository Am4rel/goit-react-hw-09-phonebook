import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as selectors from '../redux/auth/auth-selectors';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
const PrivateRoute = ({
  component: Component,
  redirectTo,
  ...routeProps
}) => {
  const isAuthenticated = useSelector(state => selectors.isAuthenticated(state));
  
  return <Route
    {...routeProps}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
};

export default PrivateRoute;