import React, { Component } from 'react';

import Title from "./components/Title/Title";
import Forecaster from './containers/Forecaster/Forecaster';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Forecaster />
      </div>
    );
  }
}

export default App;
