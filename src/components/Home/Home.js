import React from 'react';
import '../../css/App.css';
import "react-router";
import Search from './Search';
import MovieList from './MovieList';

export default class Home extends React.Component {
  render() {
    return (      
      <div> 
        <Search /> 
        <MovieList movies={this.props.movies}/>        
      </div>
    );
  }
}