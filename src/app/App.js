import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header';
import Credits from '../credits/Credits';
import Generator from '../generator/Generator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Generator />
        <Credits />
      </div>
    );
  }
}

export default App;
