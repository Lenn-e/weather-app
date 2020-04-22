import React from 'react';

import classes from './WeatherInfoMain.module.css';
import WeatherImage from '../WeatherImage/WeatherImage';

const WeatherInfoMain = (props) => {
  let temp = <p>{props.tempC} °C</p>;
  let realFeel = <p>Real feel: {props.realC} °C</p>;
  if(props.currentUnit === "F") {
    temp = <p>{props.tempF} °F</p>;
    realFeel = <p>Real feel: {props.realF} °F</p>;
  }

  return (
    <div className={classes.WeatherInfoMain}>
      <WeatherImage 
        icon={props.icon}
        description={props.description} />
      <div className={classes.TempDisplay}>
        {temp}
        {realFeel}
      </div>
    </div>
  );
};

export default WeatherInfoMain;