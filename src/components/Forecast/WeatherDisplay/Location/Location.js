import React from 'react';

import classes from './Location.module.css';

const Location = (props) => {
  let date = new Date().toDateString()
  return (
    <div className={classes.Location}>
      <p className={classes.CityName}>{props.city}</p>
      <p className={classes.CurrentDate}>{date}</p>
    </div>
  );
};

export default Location;