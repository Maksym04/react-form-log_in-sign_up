import React from 'react';
import SignUpForm from '../../components/SignUpForm';

function SignUpPage () {
  return (
    <>
      <div>
        <h1>CREATE AN ACCOUNT</h1>
        <p>We always keep your name and email address private.</p>
      </div>
      <SignUpForm />
    </>
  );
}

export default SignUpPage;
