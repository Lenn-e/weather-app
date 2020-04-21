import React from 'react';

import classes from './WeatherInfoMain.module.css';
import WeatherImage from '../WeatherImage/WeatherImage';

const WeatherInfoMain = (props) => {
  return (
    <div className={classes.WeatherInfoMain}>
      <WeatherImage 
        icon={props.icon}
        description={props.description} />
      <div>
        <h1>{props.tempC} °C</h1>
        <h3>Real feel: {props.realC} °C</h3>
      </div>
    </div>
  );
};

export default WeatherInfoMain;