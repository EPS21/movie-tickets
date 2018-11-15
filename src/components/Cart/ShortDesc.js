import React from 'react';

export default class ShortDesc extends React.Component{
    render(){
        const movie = this.props.movie
        return(
            <div>
                <h4>Summary</h4>
                {/* <p>{movie.movie_name}</p> */}
            </div>
        )
    }
}