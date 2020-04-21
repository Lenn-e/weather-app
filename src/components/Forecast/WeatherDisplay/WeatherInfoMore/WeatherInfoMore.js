import React from 'react';

const WeatherInfoMore = (props) => {
  return (
    <div>
      <p>Pressure: {props.pressure} hPa</p>
      <p>Humidity: {props.humidity}%</p>
    </div>
  );
};

export default WeatherInfoMore;