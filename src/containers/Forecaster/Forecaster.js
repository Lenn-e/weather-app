import React, { Component } from 'react';

import weatherAPI from "../../API/weather/weatherAPI";
import classes from "./Forecaster.module.css";
import SearchBar from '../../components/Forecast/SearchBar/SearchBar';
import WeatherDisplay from '../../components/Forecast/WeatherDisplay/WeatherDisplay';

class Forecaster extends Component {
  state = {
    currentLocation: {}
  };

  componentDidMount = () => {
    weatherAPI.getWeatherData("Tokyo")
      .then(data => {
        this.setState({
          currentLocation: data
        });
      });
  };

  getWeatherData = (city) => {
    weatherAPI.getWeatherData(city)
      .then(data => {
        this.setState({
          currentLocation: data
        });
      });
  };

  render() {
    return (
      <div className={classes.Forecaster}>
        <SearchBar 
          getWeatherData={this.getWeatherData} />
        <WeatherDisplay 
          tempF={this.state.currentLocation.temperatureF}
          tempC={this.state.currentLocation.temperatureC}
          city={this.state.currentLocation.name} />
      </div>
    );
  }
}

export default Forecaster;