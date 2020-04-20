import React from 'react';

import WeatherInfo from '../WeatherInfo/WeatherInfo';
import classes from './WeatherDisplay.module.css';
import Location from '../Location/Location';

const WeatherDisplay = (props) => {
  return (
    <div className={classes.WeatherDisplay}>
      <Location 
        city={props.city} />
      <WeatherInfo 
        tempF={props.tempF}
        tempC={props.tempC} />

    </div>
  );
};

export default WeatherDisplay;