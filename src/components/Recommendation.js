import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react'
import './Recommendation.css'


export class Recommendation extends Component {
  render() {
  let funny_intros = ["You know the lunch room is full of weirdos. Take a break at ", "Microwave lines killing your day? Head over to "]
  let restaurants = this.props.restaurantData
  let rec_restaurant = restaurants[Math.floor(Math.random()*restaurants.length)];
  let intro = funny_intros[Math.floor(Math.random()*funny_intros.length)];

  console.log(rec_restaurant)

    return (
    <div>
      <div>
        <h1>{intro}<a href={rec_restaurant.yelp_url} className="recommended-restaurant">{rec_restaurant.name}</a>!</h1>
      </div>

      <div className="restaurant-info">

        <div className="restaurant-type">
          <div><Icon circular inverted color='teal' name='spoon' /></div>
          <div><p>{rec_restaurant.category_list}</p></div>
        </div>

        <div className="restaurant-price">
          <p>{rec_restaurant.price}</p>
        </div>

        <div className="restaurant-takeout">
          <div>{rec_restaurant.takeout ? <Icon circular inverted color='teal' name='thumbs up' /> : <Icon circular inverted color='orange' name='thumbs down' />}</div>
          <div><p>Takeout</p></div>
        </div>

        <div className="restaurant-delivery">
          <div>{rec_restaurant.delivery ? <Icon circular inverted color='teal' name='thumbs up' /> : <Icon circular inverted color='orange' name='thumbs down' />}</div>
          <div><p>Delivery</p></div>
        </div>

      </div>
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
