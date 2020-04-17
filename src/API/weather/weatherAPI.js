const weatherAPI = (() => {
  const requestWeatherData = (location) => {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=96b1e2bf4e1fdbd8e2bb97f9be4991e4`, {mode: 'cors'})
    .then(response => {
      return response.json();
    })
    .then(weatherData => {
      return weatherData;
    })
    .catch(error => error);
  }

  // extract only the relevant data
  const getWeatherData = async (location) =>{
    const data = await requestWeatherData(location);

    if(data.cod === "404") {
      if(data.message === "city not found") alert("Location not found");
      return null;
    }

    const relevantData = {
      description: data.weather[0].description,
      temperature: data.main.temp,
      temperatureFeel: data.main.feels_like,
      name: data.name
    };
    
    return relevantData;
  };

  return {
    getWeatherData,
  };
})();

export default weatherAPI;