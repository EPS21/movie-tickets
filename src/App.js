import React, { Component } from 'react';
// import './App.css';
import './css/App.css';
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
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/movies')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          movies: json,
        })
      })
  }

  render() {

    var {isLoaded} = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <BrowserRouter>
          <div className="App">
            <Header />

            <Home movies={this.state.movies} />

            {/* <Link to="/">Home</Link>
            <Link to="/shoppingcart">Cart</Link>

            <Route exact path="/" component={Home} />
            <Route path="/shoppingcart" component={Cart} /> */}
          </div>
        </BrowserRouter>
      );
    }

    
  }
}

export default App;
