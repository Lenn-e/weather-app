const weatherAPI = (() => {
  class LocationError extends Error {
    name = "LocationError";
  };

  const requestWeatherData = (location) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=96b1e2bf4e1fdbd8e2bb97f9be4991e4`, {mode: 'cors'})
    .then(response => {
      if(!response.ok && response.status !== 404) throw new Error();
      return response.json();
    })
    .then(weatherData => {
      if(weatherData.message === "city not found") throw new LocationError(weatherData.message);
      return weatherData;
    })
    .catch(error => {
      if(error instanceof LocationError) {
        alert("Location not found");
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  }

  const convertToCelsius = (temperature) => {
    return Math.round(temperature - 273.15);
  };

  const convertToFahrenheit = (temperature) => {
    return convertToCelsius(temperature) * 2 + 30;
  };

  // extract only the relevant data
  const getWeatherData = async (location) =>{
    try {
      const data = await requestWeatherData(location);
  
      const relevantData = {
        description: data.weather[0].description,
        temperatureF: convertToFahrenheit(data.main.temp),
        temperatureFeelF: convertToFahrenheit(data.main.feels_like),
        temperatureC: convertToCelsius(data.main.temp),
        temperatureFeelC: convertToCelsius(data.main.feels_like),
        name: data.name,
        icon: data.weather[0].icon,
        pressure: data.main.pressure,
        humidity: data.main.humidity
      };
      console.log(relevantData.icon)
      
      return relevantData;
    } catch {
      return {};
    }
  };

  return {
    getWeatherData,
  };
})();

export default weatherAPI;