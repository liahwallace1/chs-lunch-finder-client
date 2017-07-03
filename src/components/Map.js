import React, {Component} from 'react';
import { connect } from 'react-redux';

class Map extends Component {

  componentDidMount() {
    const position = {lat: this.props.restaurant.latitude, lng: this.props.restaurant.longitude}
    const map = new this.props.google.maps.Map(this.refs.map, {
      center: position,
      zoom: 14
    })
    new this.props.google.maps.Marker({
      map: map,
      position: position
    })
    window.scrollTo(0,document.body.scrollHeight)
  }

 render() {
   const style = {
     width: `${this.props.recommendation.map_width}px`,
     height: '430px'
   }

   return (
     <div ref='map' className="google-map" style={style}>
      Loading Map
    </div>
   )
 }
}

const mapStateToProps = (state) => {
  return {
    recommendation: state.recommendation
  }
}


export const ConnectedMap = connect(mapStateToProps)(Map)
