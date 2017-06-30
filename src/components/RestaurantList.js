import React from 'react';
import { Item } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Restaurant from '../components/Restaurant';

const RestaurantList = ({ restaurants }) => {

  return (
    <Item.Group divided unstackable className="restaurant-list">
      {restaurants.map(restaurant => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </Item.Group>

  )
}

export default RestaurantList
