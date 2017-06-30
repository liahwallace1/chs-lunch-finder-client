import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map, {GoogleApiWrapper} from 'google-maps-react';
import { Header } from 'semantic-ui-react';
// import Map from '../components/Map';

class GoogleMapWrapper extends Component {
  onMapMove() {}

  render() {
    const restaurant = this.props.recommendation.restaurant;

    return (
      <div className='map-container'>
        <Header size='medium'>
          {restaurant.address}<br />
          {restaurant.city}, {restaurant.state} {restaurant.zip_code}
        </Header>
        <Map
          google={this.props.google}
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recommendation: state.recommendation,
  }
}

export const ConnectedGoogleMapWrapper = connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: 'AIzaSyBHctnD2biEXNByZnGKdXRq836H0WPHu-8', version: '3.27'
})(GoogleMapWrapper))
