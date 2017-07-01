import React from 'react';
import { Header } from 'semantic-ui-react';

const MapHeader = ({restaurant}) =>
  <Header size='medium' inverted>
    {restaurant.address}<br />
    {restaurant.city}, {restaurant.state} {restaurant.zip_code}
  </Header>



  export default MapHeader
