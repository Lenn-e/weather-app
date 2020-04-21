import React from 'react';
import classes from './WeatherImage.module.css';

const WeatherImage = (props) => {
  const icon = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;

  return (
    <div className={classes.WeatherImage}>
      <img src={icon} alt="current weather" />
      <p className={classes.Description}>{props.description}</p>
    </div>
  );
};

export default WeatherImage;