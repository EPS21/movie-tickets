import React from 'react';
import './Home.css';

export default class Movie extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <div className="movie-container">
        <div className="img-container">
          <img className="movie-img" src={movie.poster} alt={movie.movie_name} />
            {/* {this.renderOverlay()} */}
          
        </div> 
        <div className="movie-desc">
          <p>{movie.movie_name}, {movie.runtime}</p>
          <p>Rating: {movie.rating}</p>
        </div>

      </div>      




      // <div className="movie-container">        
      //   <p>{this.props.movie.id}</p>
      //   <p>{this.props.movie.movie_name}</p>
      // </div>

    );
  }
}