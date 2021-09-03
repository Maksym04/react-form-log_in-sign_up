import * as yup from 'yup';
import {
  displayNameTest,
  firstNameTest,
  lastNameTest,
  passwordTest,
} from './validationTest';

export const LOGIN_SCHEMA = yup.object({
  firstName: yup
    .string()
    .matches(
      firstNameTest,
      'The name must have only Latin letters and start with a capital letter'
    )
    .min(1)
    .required('First Name is required'),
  lastName: yup
    .string()
    .matches(
      lastNameTest,
      'The surname must have only Latin letters and start with a capital letter'
    )
    .min(1)
    .required('Last Name is required'),
  displayName: yup
    .string()
    .matches(
      displayNameTest,
      'The display name must have only Latin letters and start with a capital letter'
    )
    .min(1)
    .required('Display Name is required'),
  email: yup
    .string()
    .email(
      'The email must correspond to the following form: somename@example.com'
    )
    .required('Email is required'),
  password: yup
    .string()
    .matches(
      passwordTest,
      'Password must contain from 8 to 32 characters including uppercase and lowercase Latin letters, number and symbols'
    )
    .min(8)
    .max(32)
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .required('Password Confirmation is required')
    .oneOf(
      [yup.ref('password')],
      'Confirmed password does not match the previous password'
    ),
});
