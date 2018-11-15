import React from 'react';
import './Home.css'
import Movie from './Movie';

export default class MovieList extends React.Component {
  
  render() {
    const movies = this.props.movies;
    return (      
      <div className="movie-table">
        {
          movies.map(movie => {
            return (
              <Movie key={movie.id} id={movie.id} movie={movie}/>
            )
          })
        }    
      </div>

    );  
  } 
}