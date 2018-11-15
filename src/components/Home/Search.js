import React from 'react';
import './Home.css'
import SearchBar from './SearchBar';
import SortMenu from './SortMenu';

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SortMenu />
      </div>    
    );
  }
}