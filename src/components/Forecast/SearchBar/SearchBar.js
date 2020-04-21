import React, { useEffect } from 'react';

import classes from "./SearchBar.module.css";
import places from "places.js";

const SearchBar = (props) => {
  useEffect(() => {
    const configuration = {
      appId: "plJK033GRQFK",
      apiKey: "12edde8b99ba2b4c68dc410c5e10753a",
      container: document.querySelector('#address-input')
    };
    const placesAutocomplete = places(configuration);
    
    placesAutocomplete.on('change', function resultSelected(e) {
      let city = e.suggestion.name;
      props.getWeatherData(city);
    });
  });

  return (
    <div className={classes.SearchBar}>
      <input type="text" id="address-input" name="location" placeholder="City" />
    </div>
  );
};

export default React.memo(SearchBar);