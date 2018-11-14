import React, { Component } from 'react';
import './App.css';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import Header from './components/Header/Header';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
