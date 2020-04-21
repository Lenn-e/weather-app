import React from 'react';

import classes from './WeatherInfoMain.module.css';
import WeatherImage from '../WeatherImage/WeatherImage';

const WeatherInfoMain = (props) => {
  let temp = <h1>{props.tempC} °C</h1>;
  let realFeel = <h3>Real feel: {props.realC} °C</h3>;
  if(props.currentUnit === "F") {
    temp = <h1>{props.tempF} °F</h1>;
    realFeel = <h3>Real feel: {props.realF} °F</h3>;
  }

  return (
    <div className={classes.WeatherInfoMain}>
      <WeatherImage 
        icon={props.icon}
        description={props.description} />
      <div>
        {temp}
        {realFeel}
      </div>
    </div>
  );
};

export default WeatherInfoMain;