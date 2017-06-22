import React, { Component } from 'react';
import { connect } from 'react-redux';


export class Recommendation extends Component {
  render() {
  let funny_intros = ["You know the lunch room is full of weirdos. Take a break at ", "Microwave lines killing your day? Head over to "]
  let restaurants = this.props.restaurantData
  let recommended_restaurant = restaurants[Math.floor(Math.random()*restaurants.length)];
  let intro = funny_intros[Math.floor(Math.random()*funny_intros.length)];
  console.log(recommended_restaurant)
    return (
    <div>
      <h1>{intro}<span className="recommended-restaurant">{recommended_restaurant.name}</span>!</h1>

    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantData: state.restaurantDataReducer,
  }
}


// const Recommendation = () => {

export const ConnectedRecommendation = connect(mapStateToProps)(Recommendation)
