import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
      value: props.value
    }
  }

  render() {
    return (
      <span style={{'color': this.state.color}}>{this.state.value}</span>
    );
  }
}

class App extends Component {
  render() {
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
}

export default App;
