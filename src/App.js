import React, { Component } from 'react';
import './App.css';

import LuasGreenLineComponent from './components/LuasGreenLineComponent/LuasGreenLineComponent';
import LuasRedLineComponent from './components/LuasRedLineComponent/LuasRedLineComponent';


class App extends Component {

  render() {

    return (
      <div className="App">
        <LuasGreenLineComponent />
        <LuasRedLineComponent />
      </div>
    );
  }
}

export default App;
