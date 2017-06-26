import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Item } from 'semantic-ui-react';
import Restaurant from '../components/RestaurantList';
import Filter from '../components/Filter';

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

const mapStateToProps = state => {
  restaurants: getVisibleRestaurants(state.restaurantData, state.visibilityFilter)
}

export class VisibleRestaurantList extends Component {
  render() {
    const restaurants = this.props.restaurantData.map((restaurant, index) => {
      return <div key={restaurant.id}><Restaurant restaurant={restaurant} /></div>
    })
    return (
      <div>
        <h3>Restaurants in Charleston, SC</h3>
        <Filter  />
        <RestaurantList restaurants={this.props.restaurants}/>
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

export const ConnectedVisibleRestaurantList = connect(mapStateToProps)(VisibleRestaurantList)
