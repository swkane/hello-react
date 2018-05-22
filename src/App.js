import React, { Component } from 'react';
import Text from './Text';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <h1>Hello, <Text color="purple" value="Sam" /></h1>
        </p>
      </div>
    );
}

export default App;
