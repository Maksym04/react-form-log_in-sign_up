import { Field, Form, Formik } from 'formik';
import React from 'react';
import styles from './SignUpForm.module.sass';
import Icon from '@mdi/react';
import { mdiGoogle } from '@mdi/js';
import { LOGIN_SCHEMA } from '../../utils/validatingSchemas';
import Input from '../Input';

function SignUpForm () {
  const signupFormInitialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    picked: '',
    toogle: false,
  };

  const signupFormHandleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={signupFormInitialValues}
      onSubmit={signupFormHandleSubmit}
      validationSchema={LOGIN_SCHEMA}
    >
      {formikProps => {
        return (
          <Form className={styles.signupFormContainer}>
            <div className={styles.signupBox}>
              <div className={styles.signupBlock}>
                <Input
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  autofocus
                />
                <Input type='text' name='lastName' placeholder='Last Name' />
              </div>
              <div className={styles.signupBlock}>
                <Input
                  type='text'
                  name='displayName'
                  placeholder='Display Name'
                />
                <Input type='text' name='email' placeholder='Email Address' />
              </div>
              <div className={styles.signupBlock}>
                <Input type='password' name='password' placeholder='Password' />
                <Input
                  type='password'
                  name='passwordConfirmation'
                  placeholder='Password Confirmation'
                />
              </div>
            </div>
            <label className={styles.joinBuyerBox}>
              <div className={styles.picked}>
                <Field type='radio' name='picked' value='joinAsBuyer' />
              </div>
              <div className={styles.pickedBox}>
                <p className={styles.pickedBoxTextHeader}>Join As a Buyer</p>
                <span className={styles.pickedBoxText}>
                  I am looking for a Name, Logo or Tagline for my business,
                  brand or product.
                </span>
              </div>
            </label>
            <label className={styles.joinCreativeBox}>
              <div className={styles.picked}>
                <Field type='radio' name='picked' value='joinAsCreative' />
              </div>
              <div className={styles.pickedBox}>
                <p className={styles.pickedBoxTextHeader}>
                  Join As a Creative or Marketplace Seller
                </p>
                <span className={styles.pickedBoxText}>
                  I plan to submit name ideas, Logo designs or sell names in
                  Domain Marketplace.
                </span>
              </div>
            </label>
            <label className={styles.label}>
              <Field type='checkbox' name='toogle' /> Allow Squadhelp to send
              marketing/promotional offers from time to time
            </label>
            <button className={styles.signupButton1} type='submit'>
              Create account
            </button>
            <p className={styles.textBetweenButton}>
              By clicking this button, you agree to our{' '}
              <a
                className={styles.linkTextBetweenButton}
                href='https://www.google.com/'
              >
                Terms of Service
              </a>
              .
            </p>
            <button className={styles.signupButton2} type='submit'>
              <Icon
                path={mdiGoogle}
                title='User Profile'
                size={1}
                color='white'
              />
              <a
                className={styles.signupButton2Text}
                href='mailto:nowhere@mozilla.org'
              >
                Sign in with Google
              </a>
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;
