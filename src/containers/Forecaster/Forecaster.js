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
          realF={this.state.currentLocation.temperatureFeelF}
          realC={this.state.currentLocation.temperatureFeelC}
          city={this.state.currentLocation.name}
          icon={this.state.currentLocation.icon}
          description={this.state.currentLocation.description} />
      </div>
    );
  }
}

export default Forecaster;