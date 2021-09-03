import { Field, Form, Formik } from 'formik';
import React from 'react';
import Icon from '@mdi/react';
import { mdiGoogle } from '@mdi/js';
import styles from './LogInForm.module.sass';
import { LOGIN_SCHEMA } from '../../utils/validatingSchemas';
import Input from '../Input';

function LogInForm () {
  const loginFormInitialValues = {
    email: '',
    password: '',
    toogle: false,
  };

  const loginFormHandleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={loginFormInitialValues}
      onSubmit={loginFormHandleSubmit}
      validationSchema={LOGIN_SCHEMA}
    >
      {formikProps => {
        return (
          <Form className={styles.loginFormContainer}>
            <Input
              type='text'
              name='email'
              placeholder='Email address'
              autofocus
            />
            <Input type='password' name='password' placeholder='Password' />
            <div className={styles.rememberForgotBlock}>
              <label className={styles.rememberBlock}>
                <Field type='checkbox' name='toogle' /> Remember Me
              </label>
              <a
                className={styles.forgotBlock}
                href='mailto:nowhere@mozilla.org'
              >
                Forgot password?
              </a>
            </div>
            <div className={styles.buttonLoginContainer}>
              <button className={styles.loginButton1} type='submit'>
                LOGIN
              </button>
              <button className={styles.loginButton2} type='submit'>
                <Icon
                  path={mdiGoogle}
                  title='User Profile'
                  size={1}
                  color='white'
                />
                <p className={styles.button2Text}>
                  <a
                    className={styles.button2Link}
                    href='mailto:nowhere@mozilla.org'
                  >
                    Sign in with Google
                  </a>
                </p>
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LogInForm;
