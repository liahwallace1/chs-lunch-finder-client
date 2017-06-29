import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import RestaurantList from '../components/RestaurantList';
import { ConnectedFilter } from './Filter';

// import { toggleFilter } from '../actions/filterActions';

const getVisibleRestaurants = (restaurants, filter) => {
  debugger
  if (filter.priceFilter.length === 0 && filter.locationFilter.length === 0) {
    return restaurants
  } else {
    var filteredRestaurants = []
    restaurants.forEach(r => {
      if (filter.priceFilter.indexOf(r.price) !== -1 && filter.locationFilter.indexOf(r.zip_code) !== -1) {
        filteredRestaurants.push(r)
      }
    })
    return filteredRestaurants
  }
  // switch (filter) {
  //   case 'NULL':
  //     return restaurants
  //   case 'PRICE_FILTER':
  //     return restaurants.filter(r => r.price = filter.priceType)
  //   case 'LOCATION_FILTER':
  //     return restaurants.filter(r => r.zip_code = filter.zip_code)
    // case 'TAKEOUT_FILTER':
    //   return restaurants.filter(r => r.takeout)
    //   case 'DELIVERY_FILTER':
    //     return restaurants.filter(r => r.delivery)
  // }
}

// const mapStateToProps = state => {
//   restaurants: getVisibleRestaurants(state.restaurantData, state.visibilityFilter)
// }

export class VisibleRestaurantList extends Component {
  render() {

    var restaurants = getVisibleRestaurants(this.props.restaurantData, this.props.visibilityFilter)
    console.log(restaurants)
    return (
      <div>
        <h3>Restaurants in Charleston, SC</h3>
        <ConnectedFilter  />
        <RestaurantList restaurants={restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantData: state.restaurantData,
    visibilityFilter: state.visibilityFilter
    // toggleFilter: state.filterReducer
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ toggleFilter: toggleFilter }, dispatch)
// }

export const ConnectedVisibleRestaurantList = connect(mapStateToProps)(VisibleRestaurantList)
