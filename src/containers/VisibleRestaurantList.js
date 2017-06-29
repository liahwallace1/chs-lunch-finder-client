import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantList from '../components/RestaurantList';
import { ConnectedFilter } from './Filter';


const getVisibleRestaurants = (restaurants, filter) => {
 // no filters
  if (filter.priceFilter.length === 0 && filter.locationFilter.length === 0 && filter.takeoutFilter === false) {
    return restaurants
// only takeout filter
  } else if (filter.priceFilter.length === 0 && filter.locationFilter.length === 0 && filter.takeoutFilter === true) {
    return restaurants.filter((r) => r.takeout === true)
// price, location, and takeout filter
  } else if (filter.priceFilter.length !== 0 && filter.locationFilter.length !== 0 && filter.takeoutFilter === true) {
    var filteredRestaurants = []
    restaurants.forEach(r => {
      if (filter.priceFilter.indexOf(r.price) !== -1 && filter.locationFilter.indexOf(r.zip_code) !== -1) {
        filteredRestaurants.push(r)
      }
    })
    return filteredRestaurants.filter((r) => r.takeout === true)
// price & location filters, no takeout
  } else if (filter.priceFilter.length !== 0 && filter.locationFilter.length !== 0 && filter.takeoutFilter === false) {
    var filteredRestaurants = []
    restaurants.forEach(r => {
      if (filter.priceFilter.indexOf(r.price) !== -1 && filter.locationFilter.indexOf(r.zip_code) !== -1) {
        filteredRestaurants.push(r)
      }
    })
    return filteredRestaurants
// price & takeout filters
  } else if (filter.priceFilter.length !== 0 && filter.takeoutFilter === true) {
    var filteredRestaurants = []
    restaurants.forEach(r => {
      if (filter.priceFilter.indexOf(r.price) !== -1) {
        filteredRestaurants.push(r)
      }
    })
    return filteredRestaurants.filter((r) => r.takeout === true)
  // price filter only
} else if (filter.priceFilter.length !== 0 && filter.takeoutFilter === false) {
    var filteredRestaurants = []
    restaurants.forEach(r => {
      if (filter.priceFilter.indexOf(r.price) !== -1) {
        filteredRestaurants.push(r)
      }
    })
    return filteredRestaurants
  // location and takeout filter
  }else if (filter.locationFilter.length !== 0 && filter.takeoutFilter === true){
    var filteredRestaurants = []
    restaurants.forEach(r => {
      if (filter.locationFilter.indexOf(r.zip_code) !== -1) {
        filteredRestaurants.push(r)
      }
    })
    return filteredRestaurants.filter((r) => r.takeout === true)
  // location filter only
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
