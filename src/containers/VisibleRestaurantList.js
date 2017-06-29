import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantList from '../components/RestaurantList';
import { ConnectedFilter } from './Filter';


const getVisibleRestaurants = (restaurants, filter) => {
  if (filter.priceFilter.length === 0 && filter.locationFilter.length === 0 && filter.takeoutFilter === false && filter.deliveryFilter === false) {
    return restaurants
  } else if (filter.priceFilter.length !== 0 && filter.locationFilter.length !== 0){
    var filteredRestaurants = []
    restaurants.forEach(r => {
      if (filter.priceFilter.indexOf(r.price) !== -1 && filter.locationFilter.indexOf(r.zip_code) !== -1) {
        filteredRestaurants.push(r)
      }
    })
    return filteredRestaurants
  } else if (filter.priceFilter.length !== 0) {
    var filteredRestaurants = []
    restaurants.forEach(r => {
      if (filter.priceFilter.indexOf(r.price) !== -1) {
        filteredRestaurants.push(r)
      }
    })
    return filteredRestaurants
  } else {
    var filteredRestaurants = []
    restaurants.forEach(r => {
      if (filter.locationFilter.indexOf(r.zip_code) !== -1) {
        filteredRestaurants.push(r)
      }
    })
    return filteredRestaurants
  }
}

const applyTakeoutFilter = (restaurants, filter) => {
  if (filter.takeoutFilter === true) {
    restaurants.filter((r) => r.takeout === true)
  }
}

const applyDeliveryFilter = (restaurants, filter) => {
  if (filter.deliveryFilter === true) {
    restaurants.filter((r) => r.delivery === true)
  }
}


export class VisibleRestaurantList extends Component {
  render() {

    var restaurants = getVisibleRestaurants(this.props.restaurantData, this.props.visibilityFilter)
    applyTakeoutFilter(restaurants, this.props.visibilityFilter)
    applyDeliveryFilter(restaurants, this.props.visibilityFilter)

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
  }
}

export const ConnectedVisibleRestaurantList = connect(mapStateToProps)(VisibleRestaurantList)
