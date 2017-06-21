import React from 'react';
import { Image, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Restaurant = (restaurant) => {
 const categories = []
 restaurant.restaurant.categories.map((category) => {
   categories.push(category.title)
 })

  return (
    <div key={restaurant.restaurant.id} className="restaurant">
      <Segment className="restaurant-main">
          <a href={restaurant.restaurant.yelp_url}><Image src={restaurant.restaurant.image_url} size='small' floated='left' height='50px' /></a>
          <h3>{restaurant.restaurant.name}</h3>
          <p>{restaurant.restaurant.price}     -     Rating: {restaurant.restaurant.yelp_rating}</p>
          <p>Type: {categories.join(", ")}</p>
          <p>{restaurant.restaurant.address}, {restaurant.restaurant.city}, {restaurant.restaurant.state} {restaurant.restaurant.zip_code}</p>
      </Segment>
    </div>
  )
}

export default Restaurant
