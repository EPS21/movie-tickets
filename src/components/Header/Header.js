import React from 'react';
import './Header.css';
import cart from '../imgs/cart.png';
import {Link} from 'react-router-dom';

export default class Header extends React.Component{
    render() {
        return(
            <div className="Head">
                <h1>Fandango Rip-off</h1>
                <div className="Carts">
                    <p>Welcome, User</p>
                    <img src={cart} alt={cart} height="35" width="35"/>
                </div>
                <ul>
            {/* <li><Link to='/'>Home</Link></li>
            <li><Link to='/movies'>Movies</Link></li>
            <li><Link to='/shoppingcart'>Cart</Link></li> */}
          </ul>
            </div>
        )
    }
}