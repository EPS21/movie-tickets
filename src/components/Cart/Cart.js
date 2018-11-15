import React from 'react';
import Purchase from './Purchase';
import ShortDesc from './ShortDesc';

export default class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cart: 0
        }
    }

    render(){
        const movie = this.props.location.state;
        // console.log(movie)
        return(
            <div className="cart-container">
                <h3>Cart goes here</h3>
                <Purchase />
                <ShortDesc movie={movie}/>
            </div>
        )
    }
}
