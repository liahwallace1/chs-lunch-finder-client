import React, { Component } from 'react';
import { connect } from 'react-redux';
import {GoogleApiWrapper} from 'google-maps-react';
import MapHeader from '../components/MapHeader';
import Map from '../components/Map';

class Container extends Component {
  render() {

    const style = {
      width: '100vw',
      height: '50vh'
    }
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div className='map-container' style={style}>
        <MapHeader restaurant={this.props.recommendation.restaurant}/>
        <Map google={this.props.google.maps.map} />
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
