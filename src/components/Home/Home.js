import React from 'react';
import '../../css/App.css';
import "react-router";
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom'
import Search from './Search';
// import Cart from '../Cart/Cart'

export default class Home extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div> 
                    <Search /> 
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Director</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.movies.map(item => (
                                <tr key={item.id}>
                                    <td>{item.movie_name}</td>
                                    <td>{item.director_name}</td>
                                </tr>
                            ))
                        }     
                        </tbody>
                    </table>
                </div>
            </BrowserRouter>
        );
    }
}