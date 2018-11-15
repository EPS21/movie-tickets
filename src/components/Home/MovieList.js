import React from 'react';
import './Home.css'
import Movie from './Movie';

export default class MovieList extends React.Component {
  
  render() {    
    const movies = this.props.movies.filter(
      (movie) => {
        return movie.movie_name.toLowerCase().indexOf(
          this.props.searchStr.toLowerCase()) !== -1;
      }
    );   
    
    // Sorted A-Z
    if (this.props.sortVal === 'az') {
      return (      
        <div className="movie-table">
          {movies.sort(function(a, b) {
            let nameA = a.movie_name.toLowerCase();
            let nameB = b.movie_name.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          })
          .map(movie => {
            return (              
              <Movie key={movie.id} id={movie.id} movie={movie}/>
            )
          })}    
        </div>
      );
    }
    // Sorted Z-A
    else if (this.props.sortVal === 'za') {
      return (      
        <div className="movie-table">
          {movies.sort(function(a, b) {
            let nameA = a.movie_name.toLowerCase();
            let nameB = b.movie_name.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          }).reverse().map(movie => {
            return (              
              <Movie key={movie.id} id={movie.id} movie={movie}/>
            )
          })}    
        </div>
      );  
    }
    // Default Sort
    else {
      return (      
        <div className="movie-table">
          {movies.map(movie => {
            return (            
              <Movie key={movie.id} id={movie.id} movie={movie}/>
            )
          })}    
        </div>
      );  
    }
  } 

  
}