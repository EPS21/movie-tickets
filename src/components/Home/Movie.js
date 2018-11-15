import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

export default class Movie extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <Link to={"/"+movie.id} className="movie-container">
        <div className="img-container">
          <img className="movie-img" src={movie.poster} alt={movie.movie_name} />          
        </div> 
        <div className="movie-desc">
          <p>{movie.movie_name}, {movie.runtime} mins</p>
          <p>Rating: {movie.rating}</p> 
        </div>
      </Link>
    );
  }
}