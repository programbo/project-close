import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';

const getForms = async () => {
  const request = await fetch('https://project-close.now.sh/api/forms');
  const data = await request.json();
  console.log('data', data); // eslint-disable-line no-console
};

class App extends Component {
  componentDidMount() {
    getForms();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
