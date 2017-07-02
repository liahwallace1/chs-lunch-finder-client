import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Map extends Component {

  componentDidMount() {
    const position = {lat: this.props.restaurant.latitude, lng: this.props.restaurant.longitude}
    const map = new this.props.google.maps.Map(this.refs.map, {
      center: position,
      zoom: 14
    })
    const marker = new this.props.google.maps.Marker({
            map: map,
            position: position
    })
  }



 render() {
   const style = {
     width: '100%',
     height: '425px'
   }

   return (
     <div ref='map' className="google-map" style={style}>
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

// loadMap() {
//   if (this.props && this.props.google) {
//     // google is available
//     const maps = this.props.google.maps;
//     const node = this.refs.map;
//
//
//     let zoom = 14;
//     let lat = 32.532543;
//     let lng = -79.342354;
//     const center = new maps.LatLng(lat, lng);
//     const mapConfig = Object.assign({}, {
//       center: center,
//       zoom: zoom
//     })
//     this.map = new maps.Map(node, mapConfig);
//   }
// }
