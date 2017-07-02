import React, { Component } from 'react';
import { connect } from 'react-redux';
import {GoogleApiWrapper} from 'google-maps-react';
import MapHeader from '../components/MapHeader';
import Map from '../components/Map';

class Container extends Component {

  render() {
    const restaurant = this.props.recommendation.restaurant

    const style = {
      width: '100vw',
      height: '500px',
    }
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div className='map-container' style={style}>
        <MapHeader restaurant={restaurant}/>
        <Map google={this.props.google} restaurant={restaurant} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recommendation: state.recommendation,
  }
}

export const ConnectedContainer = connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: 'AIzaSyBHctnD2biEXNByZnGKdXRq836H0WPHu-8', version: '3.27'
})(Container))
