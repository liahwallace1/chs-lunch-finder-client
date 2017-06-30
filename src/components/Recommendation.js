import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Icon, Button } from 'semantic-ui-react';
import { setRecommendation, toggleMap } from '../actions/recommendationActions';
import { ConnectedGoogleMapWrapper } from '../containers/GoogleMapWrapper';
import './Recommendation.css';

class Recommendation extends Component {

  handleNewRecommendation() {
    let restaurant = this.props.restaurantData[Math.floor(Math.random()*this.props.restaurantData.length)]
    this.props.dispatch(setRecommendation(restaurant))
  }

  handleMapToggle() {
    this.props.dispatch(toggleMap())
  }

  render() {
    const restaurant = this.props.recommendation.restaurant
    const funny_intros = ["You know the lunch room is full of weirdos. Take a break at ", "A line at the microwave killing your day? Head over to ", "Indecisive much? You should go to "]
    let intro = funny_intros[Math.floor(Math.random()*funny_intros.length)];

    return (
    <div className="recom-container">
      <div className="recom-info">
        <div className="recom-intro">
          <h1>{intro}<a href={restaurant.yelp_url} className="recommended-restaurant">{restaurant.name}</a>!</h1>
        </div>
      <br />
        <Grid className="restaurant-info" columns={2} stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column className="restaurant-type">
              <div><Icon circular inverted size='large' color='teal' name='food' /></div>
              <div><p>{restaurant.category_list}</p></div>
            </Grid.Column>

            <Grid.Column className="restaurant-price">
              <div><Icon circular inverted size='large' color='olive' name='currency' /></div>
              <p>{restaurant.price}</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column className="restaurant-takeout">
              <div>{restaurant.takeout ? <Icon circular inverted size='large' color='purple' name='thumbs up' /> : <Icon circular inverted size='large' color='orange' name='thumbs down' />}</div>
              <div><p>Takeout</p></div>
            </Grid.Column>

            <Grid.Column className="restaurant-delivery">
              <div>{restaurant.delivery ? <Icon circular inverted size='large' color='purple' name='thumbs up' /> : <Icon circular inverted size='large' color='orange' name='thumbs down' />}</div>
              <div><p>Delivery</p></div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="recom-buttons">
          <Button className="recom-button" size="large" color="red" onClick={() => this.handleNewRecommendation()}><Icon name='refresh' />New Suggestion</Button>
          <Button className="recom-button" size="large" color="blue" onClick={() => this.handleMapToggle()}><Icon name='map pin' />Where is it?</Button>
        </div>
      </div>
      {this.props.recommendation.restaurant ? <ConnectedGoogleMapWrapper /> : null}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantData: state.restaurantData,
    recommendation: state.recommendation
  }
}


export const ConnectedRecommendation = connect(mapStateToProps)(Recommendation)
