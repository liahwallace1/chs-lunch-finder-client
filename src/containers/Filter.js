import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Filter.css';
import { bindActionCreators } from 'redux';
import { addPriceFilter, removePriceFilter, addLocationFilter, removeLocationFilter } from '../actions/visibilityFilterActions';
// import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';

class Filter extends Component {

  handlePriceFilter(e) {
    let priceType = e.target.value
    if (e.target.checked) {
      this.props.dispatch(addPriceFilter(priceType));
    } else {
      this.props.removePriceFilter(priceType);
    }
  }

  handleLocationFilter(e) {
    let zip_code = e.target.value;
    if (e.target.checked) {
      this.props.addLocationFilter(zip_code);
    } else {
      this.props.removeLocationFilter(zip_code);
    }
  }

  render() {
    return (
      <div>
        <h4 className="filter-title">Filter Restaurants</h4>
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
          <input type="checkbox" value="takeout" />Takeout?<br />
          <input type="checkbox" value="delivery" />Delivery?<br />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantFilters: state.restaurantFilters,
    // toggleFilter: state.filterReducer
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     addPriceFilter: addPriceFilter },
//     {
//       removePriceFilter: removePriceFilter
//     }, {
//       addLocationFilter: addLocationFilter
//     }, {
//       removeLocationFilter: removeLocationFilter
//     }, dispatch)
// }

export const ConnectedFilter = connect(mapStateToProps)(Filter)
