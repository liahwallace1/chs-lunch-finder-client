import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Filter.css';
import { addPriceFilter, removePriceFilter, addLocationFilter, removeLocationFilter, addTakeoutFilter, removeTakeoutFilter } from '../actions/visibilityFilterActions';


class Filter extends Component {

  handlePriceFilter(e) {
    let priceType = e.target.value
    if (e.target.checked) {
      this.props.dispatch(addPriceFilter(priceType));
    } else {
      this.props.dispatch(removePriceFilter(priceType));
    }
  }

  handleLocationFilter(e) {
    let zip_code = e.target.value;
    if (e.target.checked) {
      this.props.dispatch(addLocationFilter(zip_code));
    } else {
      this.props.dispatch(removeLocationFilter(zip_code));
    }
  }

  handleTakeoutFilter(e) {
    if (e.target.checked) {
      this.props.dispatch(addTakeoutFilter());
    } else {
      this.props.dispatch(removeTakeoutFilter());
    }
  }


  render() {
    return (
      <div className="filter-container">
        <h3>Filter Options</h3>
        <div className="filter">
          <h4>Price</h4>
          <input type="checkbox" value="$" onClick={(e) => this.handlePriceFilter(e)}/>$<br />
          <input type="checkbox" value="$$" onClick={(e) => this.handlePriceFilter(e)}/>$$<br />
          <input type="checkbox" value="$$$" onClick={(e) => this.handlePriceFilter(e)}/>$$$<br />
          <input type="checkbox" value="$$$$" onClick={(e) => this.handlePriceFilter(e)}/>$$$$<br />
        </div>
        <div className="filter">
          <h4>Location</h4>
          <input type="checkbox" value="29401" onClick={(e) => this.handleLocationFilter(e)} />South of Calhoun<br />
          <input type="checkbox" value="29403" onClick={(e) => this.handleLocationFilter(e)} />North of Calhoun<br />
        </div>
        <div className="filter">
          <h4>Features</h4>
          <input type="checkbox" value="takeout" onClick={(e) => this.handleTakeoutFilter(e)} />Takeout?<br />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantFilters: state.restaurantFilters,
  }
}

export const ConnectedFilter = connect(mapStateToProps)(Filter)
