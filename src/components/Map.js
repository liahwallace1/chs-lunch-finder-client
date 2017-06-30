import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Map, {GoogleApiWrapper, Marker} from 'google-maps-react';
import PropTypes from 'prop-types';
import { Sidebar, Segment } from 'semantic-ui-react';


class Map extends Component {
  _renderMarkers() {
   if (!this.props.places) {
     return;
   }
   return this.props.places.map(p => {
     return <Marker
               key={p.id}
               name={p.id}
               place={p}
               label={p.name}
               onClick={this.props.onMarkerClick.bind(this)}
               map={this.props.map}
               position={p.geometry.location} />
   });
 }

 _renderChildren() {
   const {children} = this.props;

   if (React.Children.count(children) > 0) {
     return React.Children.map(children, c => {
       return React.cloneElement(c, this.props, {
         map: this.props.map,
         google: this.props.google
       })
     })
   } else {
     return this._renderMarkers();
   }
 }

 render() {
   const {children} = this.props;

   return (
     <Map map={this.props.map}
       google={this.props.google}
       className={styles.map}
       zoom={this.props.zoom}
       onRecenter={this.props.onMove}
       onDragend={this.props.onMove}
       onClick={this.props.onClick}
       visible={!children || React.Children.count(children) == 0}
       >
       {this._renderChildren()}
     </Map>
   )
 }
}

export default Map
