import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Restaurants extends Component {

  render() {
    const restaurants = this.state.restaurants.map((restaurant) => {
      return <Restaurant key={restaurant.id} restaurant={restaurant} />
    })
    return (
      <div>
        <h3>Restaurants in Charleston, SC</h3>
        <h4>Filters GO HERE</h4>
        <ul>
          <li>Restaurant Here</li>
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
