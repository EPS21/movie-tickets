import React from 'react';
import './Home.css'
import Movie from './Movie';

export default class MovieList extends React.Component {
  
  render() {
    const movies = this.props.movies;
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

{/* {this.props.movies.map( (i) => {
          return (
            <Movie key={i.id} id={i.id}/>          
          );              
        })} */}


// <div>
//   <table>
//       <thead>
//       <tr>
//           <th>Name</th>
//           <th>Director</th>
//       </tr>
//       </thead>
//       <tbody>
//       {this.props.movies.map(item => (
//           <tr>
//           <td>{item.movie_name}</td>
//           <td>{item.director_name}</td>
//           </tr>              
//       ))}     
//       </tbody>
//   </table>    
// </div>