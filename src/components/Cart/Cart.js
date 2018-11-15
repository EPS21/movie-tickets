import React from 'react';
import Purchase from './Purchase';
import ShortDesc from './ShortDesc';

export default class Cart extends React.Component{
    render(){
        // const id = this.props.location.state;
        const movie = this.props.movie;
        // console.log(id)
        console.log(movie)
        return(
            <div className="cart-container">
                <h3>Cart goes here</h3>
                <Purchase />
                <ShortDesc />
            </div>
        )
    }
}
