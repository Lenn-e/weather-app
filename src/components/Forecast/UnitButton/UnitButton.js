import React from 'react';

import classes from './UnitButton.module.css';

const UnitButton = (props) => {
  return (
    <div
      className={classes.UnitButton} 
      onClick={props.switchUnit}>
      Switch Units
    </div>
  );
};

export default UnitButton;