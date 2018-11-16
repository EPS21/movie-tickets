import React from 'react';
import Purchase from './Purchase';
import ShortDesc from './ShortDesc';

export default class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movieId: null,
            cart: 2
        }
    }

    render(){
        const pur =this.props.location.state;
        const movie = this.props.location.state ? (
            <div>
                <Purchase />
                <ShortDesc movie={pur}/>
            </div>
        ) : (
            <div>
                <Purchase />
            </div>
        )
        // console.log(movie)
        return(
            <div className="cart-container">
                { movie }
                {/* <h3>Cart goes here</h3>
                <Purchase />
                <ShortDesc movie={movie}/> */}
            </div>
        )
    }
}
