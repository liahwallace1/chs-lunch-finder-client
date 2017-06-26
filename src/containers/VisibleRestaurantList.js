import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import RestaurantList from '../components/RestaurantList';
import { ConnectedFilter } from './Filter';

// import { toggleFilter } from '../actions/filterActions';

const getVisibleRestaurants = (restaurants, filter) => {
  switch (filter) {
    case 'NULL':
      return restaurants
    case 'PRICE_FILTER':
      return restaurants.filter(r => r.price = filter.priceType)
    case 'LOCATION_FILTER':
      return restaurants.filter(r => r.zip_code = filter.zip_code)
    case 'TAKEOUT_FILTER':
      return restaurants.filter(r => r.takeout)
      case 'DELIVERY_FILTER':
        return restaurants.filter(r => r.delivery)
  }
}

// const mapStateToProps = state => {
//   restaurants: getVisibleRestaurants(state.restaurantData, state.visibilityFilter)
// }

export class VisibleRestaurantList extends Component {

  render() {

    return (
      <div>
        <h3>Restaurants in Charleston, SC</h3>
        <ConnectedFilter  />
        <RestaurantList restaurants={this.props.restaurantData}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantData: state.restaurantData,
    // toggleFilter: state.filterReducer
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ toggleFilter: toggleFilter }, dispatch)
// }

export const ConnectedVisibleRestaurantList = connect(mapStateToProps)(VisibleRestaurantList)
