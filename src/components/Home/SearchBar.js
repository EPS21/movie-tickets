import React from 'react';
import './Home.css'

export default class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputStr: '',
      hasInput: false // do I need this?
    }

    // You can put this bind in inputs onChange below, don't need it here
    //this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    console.log(event.target.value);
    this.setState({
      inputStr: event.target.value
    })
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
            value={this.state.inputStr}
            onChange={this.updateSearch.bind(this)}  
          />
        </fieldset>
        
      </div>
    )
  }
}