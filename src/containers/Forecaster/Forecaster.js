import React, { Component } from 'react';

import weatherAPI from "../../API/weather/weatherAPI";
import classes from "./Forecaster.module.css";
import SearchBar from '../../components/Forecast/SearchBar/SearchBar';
import WeatherDisplay from '../../components/Forecast/WeatherDisplay/WeatherDisplay';
import UnitButton from "../../components/Forecast/UnitButton/UnitButton";

class Forecaster extends Component {
  state = {
    currentLocation: {},
    currentUnit: "C"
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

  switchUnitHandler = () => {
    this.setState((prevState) => {
      let unit;
      prevState.currentUnit === "C" ? unit = "F" : unit = "C";
      return {
        currentUnit: unit
      };
    });
  };

  render() {
    return (
      <div className={classes.Forecaster}>
        <SearchBar 
          getWeatherData={this.getWeatherData} />
        <WeatherDisplay 
          currentUnit={this.state.currentUnit}
          tempF={this.state.currentLocation.temperatureF}
          tempC={this.state.currentLocation.temperatureC}
          realF={this.state.currentLocation.temperatureFeelF}
          realC={this.state.currentLocation.temperatureFeelC}
          city={this.state.currentLocation.name}
          icon={this.state.currentLocation.icon}
          description={this.state.currentLocation.description}
          pressure={this.state.currentLocation.pressure}
          humidity={this.state.currentLocation.humidity} />
        <UnitButton 
          switchUnit={this.switchUnitHandler} />
      </div>
    );
  }
}

export default Forecaster;