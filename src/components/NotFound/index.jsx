import React from 'react';
import styles from './NotFound.module.sass';
import ErrorIcon from '@material-ui/icons/Error';

function NotFound (props) {
  const { history } = props;

  setTimeout(() => {
    history.push('/');
  }, 10000);

  return (
    <div className={styles.notFound}>
      <div className={styles.logoError}>
        <ErrorIcon style={{ color: '#FF0000', fontSize: 300 }} />
      </div>
      <p className={styles.notFoundheaderText}>Page Not Found :(</p>
      <p className={styles.notFoundText}>
        Please check if the page address is correct
      </p>
    </div>
  );
}

export default NotFound;
