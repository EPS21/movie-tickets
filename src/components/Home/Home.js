import React from 'react';
import '../../css/App.css';
import "react-router";
import {
    Link
} from 'react-router-dom'
import Search from './Search';

export default class Home extends React.Component {

    render() {
        return (
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
                                <td>
                                    <Link to={"/"+item.id}>
                                        {item.movie_name}
                                    </Link>
                                </td>
                                <td>{item.director_name}</td>
                            </tr>
                        ))
                    }     
                    </tbody>
                </table>
            </div>
        );
    }
}