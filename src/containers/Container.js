import React, { Component } from 'react';
import { connect } from 'react-redux';
import {GoogleApiWrapper} from 'google-maps-react';
import MapHeader from '../components/MapHeader';
import {ConnectedMap} from '../components/Map';

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
        <ConnectedMap google={this.props.google} restaurant={restaurant} />
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
  apiKey: `${process.env.REACT_APP_GOOGLE_KEY}`, version: '3.27'
})(Container))
