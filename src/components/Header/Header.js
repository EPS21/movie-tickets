import React from 'react';
import './Header.css';
// import cart from '../imgs/cart.png';
import {Link} from 'react-router-dom';

export default class Header extends React.Component{
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     cart: 0
    //   }
    // }

    render() {
        return(
            <div className="Head">
                <h1>Fandango Rip-off</h1>
                <div className="Carts">
                    <p>Welcome, User</p>
                    <Link to="/shoppingcart">
                        <button></button>
                    </Link>
                    {/* <img src={cart} alt={cart} height="35" width="35"/> */}
                    <p>{this.props.cart}</p>
                </div>
            </div>
        )
    }
}