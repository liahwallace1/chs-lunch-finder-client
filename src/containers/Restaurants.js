import React, { Component } from 'react';
import { connect } from 'react-redux';
import Restaurant from '../components/Restaurant'

export class Restaurants extends Component {

  render() {
    const restaurants = this.props.restaurantData.map((restaurant, index) => {
      return <div key={restaurant.id}><Restaurant restaurant={restaurant} /></div>
    })
    return (
      <div>
        <h3>Restaurants in Charleston, SC</h3>
        <h4>Filters GO HERE</h4>
          {restaurants}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantData: state.restaurantDataReducer
  }
}

export const ConnectedRestaurants = connect(mapStateToProps)(Restaurants)
