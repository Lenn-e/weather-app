import React from 'react';
import classes from './WeatherImage.module.css';

const WeatherImage = (props) => {
  let img = null;
  if(props.icon) {
    const icon = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
    img = <img src={icon} alt="current weather" />
  }

  return (
    <div className={classes.WeatherImage}>
      {img}
      <p className={classes.Description}>{props.description}</p>
    </div>
  );
};

export default WeatherImage;