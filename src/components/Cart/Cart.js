import React from 'react';
import Purchase from './Purchase';
import ShortDesc from './ShortDesc';

export default class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cart: 0
        }
        this.addTix = this.addTix.bind(this)
    }

    addTix(){
        console.log("Adding tix")
    }

    render(){
        const pur =this.props.location.state;
        const movie = this.props.location.state ? (
            <div>
                <Purchase onClick={this.addTix} cart={this.state.cart}/>
                <ShortDesc movie={pur}/>
            </div>
        ) : (
            <div>
                <Purchase />
            </div>
        )
        return(
            <div className="cart-container">
                { movie }
            </div>
        )
    }
}
