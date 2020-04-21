import React from 'react';

import classes from './Location.module.css';

const Location = (props) => {
  let date = new Date().toDateString()
  return (
    <div className={classes.Location}>
      <p>{props.city}</p>
      <p>{date}</p>
    </div>
  );
};

export default Location;