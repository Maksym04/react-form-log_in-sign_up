import * as yup from 'yup';

export const LOGIN_SCHEMA = yup.object({
  email: yup
    .string()
    .email(
      'The email must correspond to the following form: somename@example.com'
    )
    .required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[!@#$%^&*].*).{8,32}$/,
      'Password must contain from 8 to 32 characters including uppercase and lowercase letters, number and symbols'
    )
    .min(8)
    .max(32)
    .required(),
});
