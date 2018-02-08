import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
import Navbar from './Navbar';
import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Portfolio />
        
      </div>
    );
  }
}

export default App;
