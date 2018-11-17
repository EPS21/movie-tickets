import React from 'react';
import './Home.css'
import SearchBar from './SearchBar';
import SortMenu from './SortMenu';

export default class Search extends React.Component { 

  getSearchBarStr (newState) {    
    this.props.getSearchStr(newState);
  }

  getSortMenuValue (newState) {    
    this.props.getSearchVal(newState);
  }

  render() {
    return (
      <div className="search">
        <SearchBar getSearchBarStr={this.getSearchBarStr.bind(this)} />
        <SortMenu  getSortMenuValue={this.getSortMenuValue.bind(this)} />
      </div>    
    );
  }
}