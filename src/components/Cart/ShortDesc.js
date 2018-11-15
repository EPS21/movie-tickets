import React from 'react';

export default class ShortDesc extends React.Component{
    render(){
        console.log(this.props.movie.movie_name)
        return(
            <div>
                <h2>Summary</h2>
                <h4>Name of Movie</h4>
                <p>{this.props.movie.movie_name}</p>
                <h4>Genre</h4>
                <p>No genre yet</p>
                <h4>Runtime</h4>
                <p>{this.props.movie.runtime} mins</p>
            </div>
        )
    }
}