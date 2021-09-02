import { ErrorMessage, Field } from 'formik';
import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.sass';

function Input (props) {
  const { name, ...rest } = props;

  return (
    <div className={styles.inputBox}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const inputClassNames = classNames(styles.input, {
            [styles.validInput]: !meta.error && meta.touched,
            [styles.invalidInput]: meta.error && meta.touched,
          });
          return <input {...field} {...rest} className={inputClassNames} />;
        }}
      </Field>
      <div>
        <ErrorMessage
          name={name}
          component='div'
          className={styles.errorMessage}
        />
      </div>
    </div>
  );
}

export default Input;
