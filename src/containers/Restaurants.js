import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Restaurant from '../components/Restaurant';
import Filter from '../components/Filter';

import { toggleFilter } from '../actions/filterActions';

export class Restaurants extends Component {
  render() {
    const restaurants = this.props.restaurantData.map((restaurant, index) => {
      return <div key={restaurant.id}><Restaurant restaurant={restaurant} /></div>
    })
    return (
      <div>
        <h3>Restaurants in Charleston, SC</h3>
        <Filter  />
          {restaurants}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantData: state.restaurantDataReducer,
    // toggleFilter: state.filterReducer
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ toggleFilter: toggleFilter }, dispatch)
// }

export const ConnectedRestaurants = connect(mapStateToProps)(Restaurants)
