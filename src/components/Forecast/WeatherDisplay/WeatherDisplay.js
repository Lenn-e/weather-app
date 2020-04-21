import React from 'react';

import WeatherInfoMain from './WeatherInfoMain/WeatherInfoMain';
import classes from './WeatherDisplay.module.css';
import Location from '../Location/Location';

const WeatherDisplay = (props) => {
  return (
    <div className={classes.WeatherDisplay}>
      <Location 
        city={props.city} />
      <WeatherInfoMain 
        tempF={props.tempF}
        tempC={props.tempC}
        realF={props.realF}
        realC={props.realC}
        icon={props.icon}
        description={props.description} />
    </div>
  );
};

export default WeatherDisplay;