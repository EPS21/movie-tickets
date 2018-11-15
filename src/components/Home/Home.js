import React from 'react';
import '../../css/App.css';
import "react-router";
import Search from './Search';
import MovieList from './MovieList';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStrHome: '',
      sortValHome: ''
    };
  }

  getSearchStr (newState) {
    this.setState({
      searchStrHome: newState
    });
  }

  getSearchVal (newState) {
    this.setState({
      sortValHome: newState
    });
  }

  render() {
    return (      
      <div> 
        <Search 
          getSearchStr={this.getSearchStr.bind(this)}
          getSearchVal={this.getSearchVal.bind(this)}
        /> 
        <MovieList 
          movies={this.props.movies}
          searchStr={this.state.searchStrHome}
          sortVal={this.state.sortValHome}
        />
      </div>
    );
  }
}