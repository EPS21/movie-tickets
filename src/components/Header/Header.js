import React from 'react';
import './Header.css';
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
                </div>
            </div>
        )
    }
}