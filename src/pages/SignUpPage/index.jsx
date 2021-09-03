import React from 'react';
import styles from './SignUpPage.module.sass';
import SignUpForm from '../../components/SignUpForm';

function SignUpPage () {
  return (
    <>
      <div className={styles.signupPage}>
        <h1 className={styles.headersignupText}>CREATE AN ACCOUNT</h1>
        <p className={styles.signupText}>
          We always keep your name and email address private.
        </p>
        <SignUpForm />
      </div>
    </>
  );
}

export default SignUpPage;
