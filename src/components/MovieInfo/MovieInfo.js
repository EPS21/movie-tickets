import React from 'react';
import {Link} from 'react-router-dom';

export default class MovieInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movie: null
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        fetch('http://localhost:3000/movies/'+id)
            .then(res => res.json() )
            .then(movie => {
                this.setState({
                    movie: movie
                })
            })
    }

    render(){
        const movie =this.state.movie ? (
            <div className="MovieDesc">
                <div>
                    <h5>Name</h5>
                    <p>{this.state.movie.movie_name}</p>
                    <h5>Synopsis</h5>
                    <p>{this.state.movie.synopsis}</p>
                    <h5>Release Date</h5>
                    <p>{this.state.movie.release_date}</p>
                    <h5>Genre</h5>
                    <p>{this.state.movie.genre}</p>
                    <h5>Rating</h5>
                    <p>{this.state.movie.rating}</p>
                    <h5>Run Time</h5>
                    <p>{this.state.movie.runtime} mins</p>

                    <div>
                        <Link to={{
                            pathname: "/shoppingcart",
                            state: this.state.movie
                        }}>
                            <button>Buy tix</button>
                        </Link>
                    </div>
                </div>
                <br></br>
                <div>
                    <iframe width="700" height="400" src={this.state.movie.trailer}></iframe>
                </div>
            </div>
        ) : (
            <div>Loading Movie....</div>
        )
        return(
            <div className="MovieInfoContainer">
                { movie }
            </div>
        )
    }
}