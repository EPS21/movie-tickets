import React from 'react';
import './Home.css'

export default class SortMenu extends React.Component{  

  updateSort(event) {    
    this.props.getSortMenuValue(event.target.value);
  }

  render() {
    return (
      <div className="search-sort-container">
        <fieldset>
          <legend>Sort By...</legend>
          <select 
            onChange={this.updateSort.bind(this)}
          >
            {/* <option>...</option> */}
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </fieldset>
      </div>
    )
  }
}