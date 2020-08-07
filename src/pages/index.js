import React from 'react';
import styles from './index.less';
import { Link } from 'react-router-dom';

export default () => {
  title: 'hi';
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to="/market">toMarket</Link>
    </div>
  );
};
