import React from 'react';
import './Purchase.css'

export default class Purchase extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tickets: this.props.cart
        }
        this.addTix = this.addTix.bind(this);
        this.deleteTix = this.deleteTix.bind(this);
    }

    addTix(){
        console.log("add 1 tix")
    }
    
    deleteTix(){
        console.log("delete 1 tix")
    }

    render(){
        return(
            <div className="purchase-container">
                <h2>Purchase</h2>
                <div>
                    <button onClick={this.deleteTix} className="btn"><strong>-</strong></button>
                    <p>{this.props.cart}</p>
                    <button onClick={this.addTix} className="btn"><strong>+</strong></button>
                </div>
                <p>Price: $0</p>
                <p>Total: $0</p>
                <button>Cancel Order</button>
                <button>Buy</button>
            </div>
        )
    }
}