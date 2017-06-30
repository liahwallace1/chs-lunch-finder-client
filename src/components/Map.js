import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Map, {GoogleApiWrapper, Marker} from 'google-maps-react';
import PropTypes from 'prop-types';



class Map extends Component {
  _renderMarkers() {
   let r = this.props.toggleMap.restaurant
   let pos = {lat: r.latitude, lng: r.longitude}
   return <Marker
               key={r.id}
               label={r.name}
               map={this.props.map}
               position={pos} />
   });
 }

 render() {

   return (
     <Map map={this.props.map}
       google={this.props.google}
       className={styles.map}
       zoom={this.props.zoom}
       onRecenter={this.props.onMove}
       onDragend={this.props.onMove}
       visible={!children || React.Children.count(children) == 0}
       >
     </Map>
   )
 }
}

const mapStateToProps = (state) => {
  return {
    toggleMap: state.toggleMap,
  }
}

export const ConnectedMap = connect(mapStateToProps)(Map)
