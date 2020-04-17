import React from 'react';

import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  return (
    <div className={classes.SearchBar}>
      <form onSubmit={props.getWeatherData}>
        <input type="text" name="location" placeholder="City" />
      </form>
    </div>
  );
};

export default SearchBar;