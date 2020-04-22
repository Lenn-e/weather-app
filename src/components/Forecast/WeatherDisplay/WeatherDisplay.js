import React from 'react';

import WeatherInfoMain from './WeatherInfoMain/WeatherInfoMain';
import classes from './WeatherDisplay.module.css';
import Location from './Location/Location';
import WeatherInfoMore from './WeatherInfoMore/WeatherInfoMore';

const WeatherDisplay = (props) => {
  return (
    <div className={classes.WeatherDisplay}>
      <Location 
        city={props.city} />
      <WeatherInfoMain 
        currentUnit={props.currentUnit}
        tempF={props.tempF}
        tempC={props.tempC}
        realF={props.realF}
        realC={props.realC}
        icon={props.icon}
        description={props.description} />
      <WeatherInfoMore 
        pressure={props.pressure}
        humidity={props.humidity} />
    </div>
  );
};

export default WeatherDisplay;