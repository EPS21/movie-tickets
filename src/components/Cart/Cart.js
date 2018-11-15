import React from 'react';
import Purchase from './Purchase';
import ShortDesc from './ShortDesc';

export default class Cart extends React.Component{
    render(){
        const movie = this.props.movie
        console.log(movie)
        return(
            <div className="cart-container">
                <Purchase />
                <ShortDesc movie={movie}/>
            </div>
        )
    }
}
