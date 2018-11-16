import React from 'react';

export default class ShortDesc extends React.Component{
    render(){
        return(
            <div>
                <h2>Summary</h2>
                <h4>Name of Movie</h4>
                <p>{this.props.movie.movie_name}</p>
                <h4>Genre</h4>
                <p>{this.props.movie.genre}</p>
                <h4>Runtime</h4>
                <p>{this.props.movie.runtime} mins</p>
            </div>
        )
    }
}