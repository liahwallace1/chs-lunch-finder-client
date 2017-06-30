import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Sidebar, Segment } from 'semantic-ui-react'

export class Map extends React.Component {
  constructor(props) {
    super(props);

    const {lat, lng} = this.props.initialCenter;
    this.state = {
      visible: false
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let {initialCenter, zoom} = this.props;
      const {lat, lng} = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);

      const eventNames = ['click', 'dragend'];

      eventNames.forEach(e => {
        this.map.addListener(e, this.handleEvent(e))
      })
    }
  }

  const camelize = function(str) {
    return str.split(' ').map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
  }

  handleEvent(eventName) {
    let timeout;
    const handlerName = `on${camelize(eventName)}`

    return (e) => {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        timeout = setTimeout(() => {
          if (this.props[handlerName]) {
            this.props[handlerName](this.props, this.map, e);
          }
        }, 0);
      }
    }


  render() {
    const {visible} = this.state
    return (
      <div ref='map'>
        <Sidebar.Pushable as={Segment}>
          <Sidebar animation='overlay' direction="bottom" visible={visible} inverted>

          </Sidebar>
        </Sidebar.Pushable>
      </div>
    )
  }
}

Map.propTypes = {
  google: React.PropTypes.object,
  zoom: React.PropTypes.number,
  initialCenter: React.PropTypes.object,
  onMove: React.PropTypes.func
  eventNames.forEach(e => Map.propTypes[camelize(e)] = T.func)
}

  Map.defaultProps = {
    zoom: 13,
    // Charleston, by default
    initialCenter: {
      lat: 32.786850,
      lng: -79.935674
    },
    onMove: function() {}
  }
