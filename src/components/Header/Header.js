import React from 'react';
import './Header.css';
import cart from '../imgs/cart.png';

export default class Header extends React.Component{
    render() {
        return(
            <div className="Head">
                <h1>Fandango Rip-off</h1>
                <div className="Carts">
                    <p>Welcome, User</p>
                    <button ></button>
                    {/* <img src={cart} alt={cart} height="35" width="35"/> */}
                </div>
            </div>
        )
    }
}