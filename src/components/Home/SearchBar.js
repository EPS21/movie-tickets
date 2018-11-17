import React from 'react';
import './Home.css'

export default class SearchBar extends React.Component{  

  updateSearch(event) {    
    this.props.getSearchBarStr(event.target.value);
  }
  
  render() {
    return(
      <div className="search-sort-container">
        <fieldset>
          <legend>Search Movies</legend>
          {/* onChange and onInput are the same in React? */}
          <input 
            type='text'             
            onChange={this.updateSearch.bind(this)}  
          />
        </fieldset>
        
      </div>
    )
  }
}