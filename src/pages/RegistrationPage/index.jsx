import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import HomePage from '../HomePage';
import LoginPage from '../LogInPage';
import SignUpPage from '../SignUpPage';
import styles from './RegistrationPage.module.sass';

function RegistrationPage () {
  return (
    <>
      <Router>
        <nav className={styles.headerContainer}>
          <div className={styles.logoBox}>
            <Link to={'/'}>
              <img src='https://www.squadhelp.com/img/logo.png' alt='logo' />
            </Link>
          </div>
          <div className={styles.pagesBox}>
            <div className={styles.pageBox}>
              <Link to={'/logIn'} className={styles.headerText}>
                LogIn
              </Link>
            </div>
            <div className={styles.pageBox}>
              <Link to={'/signUp'} className={styles.headerText}>
                SignUp
              </Link>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path={'/'}>
            <HomePage />
          </Route>
          <Route path={'/logIn'}>
            <LoginPage />
          </Route>
          <Route path={'/signUp'}>
            <SignUpPage />
          </Route>
          <Route path={'*'} component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default RegistrationPage;
