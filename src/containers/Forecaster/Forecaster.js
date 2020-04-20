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
    weatherAPI.getWeatherData("zagreb")
      .then(data => {
        this.setState({
          currentLocation: data
        });
      });
  };

  getWeatherData = (e) => {
    e.preventDefault();
    const location = e.target.children["location"].value;
    weatherAPI.getWeatherData(location)
      .then(data => {
        console.log(data);
      });
  };

  render() {
    return (
      <div className={classes.Forecaster}>
        <SearchBar getWeatherData={this.getWeatherData} />
        <WeatherDisplay 
          tempF={this.state.currentLocation.temperatureF}
          tempC={this.state.currentLocation.temperatureC}
          city={this.state.currentLocation.name} />
      </div>
    );
  }
}

export default Forecaster;