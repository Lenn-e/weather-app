import React from 'react';

import classes from './Location.module.css';

const Location = (props) => {
  return (
    <div className={classes.Location}>
      <p>{props.city}</p>
    </div>
  );
};

export default Location;