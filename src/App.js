import React, { Component } from 'react';
import './App.css';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>hi</h1>
      </div>
    );
  }
}

export default App;
