import React, { Component } from 'react';
import './App.css';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Link to="/">Home</Link>
          <Link to="/shoppingcart">Cart</Link>

          <Route exact path="/" component={Home} />
          <Route path="/shoppingcart" component={Cart} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
