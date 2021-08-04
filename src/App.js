import React, { Suspense, lazy, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Switch, Route} from 'react-router-dom';
import { AppBar } from './components/AppBar';
import {getCurrentUser} from './redux/auth/auth-operations';
import * as selectors from './redux/auth/auth-selectors';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const PhonebookPage = lazy(() => import('./pages/PhonebookPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const Register = lazy(() => import('./pages/RegisterPage'));
const Login = lazy(() => import('./pages/LoginPage'));

const App = () => {
  const isAuthenticated = useSelector(state => selectors.isAuthenticated(state));
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

  return (
    <>
      <AppBar isAuthenticated={isAuthenticated}/>

      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute exact path="/contacts" redirectTo="/users/login" component={PhonebookPage} />
          <PublicRoute path="/users/signup" redirectTo="/contacts" component={Register} />
          <PublicRoute path="/users/login" redirectTo="/contacts" component={Login} />
        </Switch>
      </Suspense>
    </>
  )
}

export default App;
