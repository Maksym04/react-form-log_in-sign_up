import React from 'react';
import LogInForm from '../../components/LogInForm';
import styles from './LogInPage.module.sass';

function LoginPage () {
  return (
    <>
      <div className={styles.loginPage}>
        <h1 className={styles.headerLoginText}>LOGIN TO YOUR ACCOUNT</h1>
        <LogInForm />
      </div>
    </>
  );
}

export default LoginPage;
