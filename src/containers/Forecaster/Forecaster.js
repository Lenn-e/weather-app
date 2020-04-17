import React, { Component } from 'react';

import weatherAPI from "../../API/weather/weatherAPI";
import classes from "./Forecaster.module.css";
import SearchBar from '../../components/Forecast/SearchBar/SearchBar';

class Forecaster extends Component {
  getWeatherData = (e) => {
    e.preventDefault();
    const location = e.target.children["location"].value;
    weatherAPI.getWeatherData(location)
      .then(data => console.log(data))
  };

  render() {
    return (
      <div className={classes.Forecaster}>
        <SearchBar getWeatherData={this.getWeatherData} />
      </div>
    );
  }
}

export default Forecaster;