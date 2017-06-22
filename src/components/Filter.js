import React from 'react';
import './Filter.css'
// import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';

const Filter = () => {
  return (
    <div>
      <h4 className="filter-title">Filter Restaurants</h4>
      <div className="filter">
        <h4>Price</h4>
        <input type="checkbox" value="$" />$<br />
        <input type="checkbox" value="$$" />$$<br />
        <input type="checkbox" value="$$$" />$$$<br />
        <input type="checkbox" value="$$$$" />$$$$<br />
      </div>
      <div className="filter">
        <h4>Location</h4>
        <input type="checkbox" value="29401" />South of Calhoun<br />
        <input type="checkbox" value="29403" />North of Calhoun<br />
      </div>
      <div className="filter">
        <h4>Features</h4>
        <input type="checkbox" value="takeout" />Takeout?<br />
        <input type="checkbox" value="delivery" />Delivery?<br />
      </div>
    </div>
  )
}

export default Filter
