import React from 'react';
import { Image, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Restaurant = (restaurant) => {
 const categories = []
 restaurant.restaurant.categories.map((category) => {
   return categories.push(category.title)
 })

  return (
    <div key={restaurant.restaurant.id} className="restaurant">
      <Segment className="restaurant-main">
          <a href={restaurant.restaurant.yelp_url}><Image src={restaurant.restaurant.image_url} size='small' floated='left' /></a>
          <h3>{restaurant.restaurant.name}</h3>
          <p>{restaurant.restaurant.price}     -     Rating: {restaurant.restaurant.yelp_rating}</p>
          <p>Type: {categories.join(", ")}</p>
          <p>Takout? {restaurant.restaurant.takeout ? "Yes" : "Nope"} -  Delivery? {restaurant.restaurant.delivery ? "Yes" : "Nope"}</p>
          <p>{restaurant.restaurant.address}, {restaurant.restaurant.city}, {restaurant.restaurant.state} {restaurant.restaurant.zip_code} - {restaurant.restaurant.display_phone}</p>
      </Segment>
    </div>
  )
}

export default Restaurant
