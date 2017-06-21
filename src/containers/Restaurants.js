import React, { Component } from 'react';
import { connect } from 'react-redux';
import Restaurant from '../components/Restaurant'

export class Restaurants extends Component {

  render() {
    const restaurants = this.props.restaurants.map((restaurant) => {
      return <Restaurant key={restaurant.id} restaurant={restaurant} />
    })
    return (
      <div>
        <h3>Restaurants in Charleston, SC</h3>
        <h4>Filters GO HERE</h4>
        <ul>
          {restaurants}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  }
}

export const ConnectedRestaurants = connect(mapStateToProps)(Restaurants)
