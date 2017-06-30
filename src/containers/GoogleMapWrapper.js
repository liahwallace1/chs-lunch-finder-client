import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Map, {GoogleApiWrapper} from 'google-maps-react';
import { Header, Sidebar, Segment } from 'semantic-ui-react';
// import Map from '../components/Map';

class GoogleMapWrapper extends Component {
  onMapMove() {}

  render() {
    const restaurant = this.props.toggleMap.restaurant;

    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar animation='overlay' direction='bottom' visible={this.props.toggleMap.visible} >
          <Header size='medium'>
            {restaurant.address}<br />
            {restaurant.city}, {restaurant.state} {restaurant.zip_code}
          </Header>
          <Map
            google={this.props.google}
            >
          </Map>
        </Sidebar>
      </Sidebar.Pushable>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    toggleMap: state.toggleMap,
  }
}

export const ConnectedGoogleMapWrapper = connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: 'AIzaSyBHctnD2biEXNByZnGKdXRq836H0WPHu-8'
})(GoogleMapWrapper))
