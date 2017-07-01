import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {GoogleApiWrapper, Marker} from 'google-maps-react';

class Map extends Component {
  componentDidUpdate(prevProps, prevState) {
    debugger
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  componentDidMount() {
    this.loadMap()
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const maps = this.props.google.maps;
      const node = this.refs.map;


      let zoom = 14;
      let lat = 32.532543;
      let lng = -79.342354;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      debugger
      this.map = new maps.Map(node, mapConfig);
    }
  }

 render() {
   return (
     <div ref='map'>
      Loading Map
    </div>
   )
 }
}


// const mapStateToProps = (state) => {
//   return {
//     recommendation: state.recommendation,
//   }
// }

export default Map

// export const ConnectedMap = connect(mapStateToProps)(Map)

//  _renderMarkers() {
//   let r = this.props.recommendation.restaurant
//   let pos = {lat: r.latitude, lng: r.longitude}
//   return <Marker
//               key={r.id}
//               label={r.name}
//               map={this.props.map}
//               position={pos} />
//   });
// }

// <Map map={this.props.map}
//   google={this.props.google}
//   zoom={this.props.zoom}
//   onRecenter={this.props.onMove}
//   onDragend={this.props.onMove}
//   />
