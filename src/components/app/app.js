import React, { Component } from 'react';
import './app.css';
import Main from '../sections/main';
import About from '../sections/about';

class App extends Component {
  render() {
    return (
    <div>
      <Main />
      <About />
    </div>
    )
  };
};

export default App;