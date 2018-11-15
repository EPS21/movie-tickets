import React from 'react';
import './Home.css'
import SearchBar from './SearchBar';
import SortMenu from './SortMenu';

export default class Search extends React.Component {
  // Search holds state of the string obtained from the SearchBar
  constructor(props) {
    super(props);
    this.state = {
      searchStr: '',
      sortValue: ''
    };
  }

  getSearchBarStr (newState) {
    this.setState({
      searchStr: newState
    });
    this.props.getSearchStr(newState);
  }

  getSortMenuValue (newState) {
    this.setState({
      sortValue: newState
    });
    this.props.getSearchVal(newState);
  }

  render() {
    return (
      <div className="search">
        <SearchBar getSearchBarStr={this.getSearchBarStr.bind(this)}/>
        <SortMenu 
          getSortMenuValue={this.getSortMenuValue.bind(this)}
        />
      </div>    
    );
  }
}