import React from 'react';
import classes from './Title.module.css';

const Title = (props) => {
  return (
    <div className={classes.Title}>
      <h1>Weather.</h1>
    </div>
  );
};

export default Title;