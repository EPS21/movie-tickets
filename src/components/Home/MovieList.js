import React from 'react';
import './Home.css'
import Movie from './Movie';

export default class MovieList extends React.Component {

  // Main render method
  render() {    
    // filteredMovies returns the movies filtered by movie name, by the 
    // search string provided by the user's input in search bar by the prop searchStr
    const filteredMovies = this.props.movies.filter(
      (movie) => {
        return movie.movie_name.toLowerCase().indexOf(
          this.props.searchStr.toLowerCase()) !== -1;
      }
    );    
    return(this.displaySorted(filteredMovies));
  } 

  // Function to sort movies alphabetically
  sortMoviesAlpha(movieList) {    
    return (
      movieList.sort(function(a, b) {
        let nameA = a.movie_name.toLowerCase();
        let nameB = b.movie_name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      })
    );
  }  

  // Displays movies based on sort selection, after filtering if there was any search input
  displaySorted(filteredMovies) {
    // Sorted A-Z
    if (this.props.sortVal === 'az') {
      return (      
        <div className="movie-table">
          {this.sortMoviesAlpha(filteredMovies).map(movie => {
            return ( <Movie key={movie.id} id={movie.id} movie={movie} /> );
          })}
        </div>
      );
    }    
    // Sorted Z-A
    else if (this.props.sortVal === 'za') {
      return (      
        <div className="movie-table">
          {this.sortMoviesAlpha(filteredMovies).reverse().map(movie => {
            return ( <Movie key={movie.id} id={movie.id} movie={movie} /> );
          })}
        </div>
      );  
    }
    // Default no sort
    else {
      return (      
        <div className="movie-table">
          {filteredMovies.map(movie => {
            return ( <Movie key={movie.id} id={movie.id} movie={movie}/> );
          })}    
        </div>
      );  
    }
  } 
  
}