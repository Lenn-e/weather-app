import React from 'react';

const WeatherInfo = (props) => {
  return (
    <div>
      <h1>{props.tempF} °F {props.tempC} °C</h1>
    </div>
  );
};

export default WeatherInfo;