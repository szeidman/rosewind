import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
