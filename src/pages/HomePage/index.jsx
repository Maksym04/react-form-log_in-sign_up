import React from 'react';
import styles from './HomePage.module.sass';

function HomePage () {
  return (
    <div className={styles.homePageContainer}>
      <img
        className={styles.logo}
        src='https://www.squadhelp.com/blog/wp-content/uploads/2018/04/Squadhelp_logo_white-transparent.png'
        alt='logo'
      />
    </div>
  );
}

export default HomePage;
