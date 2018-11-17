import React, { Component } from 'react';
// import './App.css';
import './css/App.css';
import "react-router";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart'
import MovieInfo from './components/MovieInfo/MovieInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoaded: false,
      cart: 0
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

  addToCart() {
    this.setState({
      cart: 1
    })
  }

  render() {

    var {isLoaded, movies} = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <BrowserRouter cart={this.state.cart}>
          <div className="App">
            <Header cart={this.state.cart}/>
            {/* <Home movies={this.state.movies}/> */}

            <Switch cart={this.state.cart}>
              <Route 
                exact path="/" 
                render={() => <Home movies={movies}/>}
              />
              <Route 
                path="/shoppingcart"
                // render={()=><Cart movie={movies}/>}
                component={Cart}
              />
              <Route 
                path="/:id" 
                component={MovieInfo}
                // render={() => <MovieInfo cart={this.state.cart} />}
                // cart={this.state.cart}
                // addToCart={this.addToCart()}
              />
            </Switch>

            <Link to="/">Home</Link>
            <Link to="/shoppingcart">Cart</Link>
            
          </div>
        </BrowserRouter>
      );
    }
    
  }
}

export default App;
