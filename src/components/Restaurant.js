import React from 'react';
import { Image, Segment, Item, Label, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Restaurant = (restaurant) => {
 // const categories = []
 // restaurant.restaurant.categories.map((category) => {
 //   return categories.push(category.title)
 // })

  return (
    <Segment key={restaurant.restaurant.id} className="restaurant">
      <Item>
        <a href={restaurant.restaurant.yelp_url}><Item.Image src={restaurant.restaurant.image_url} size='small' floated='left' /></a>

        <Item.Content>
          <Item.Header as='a'>{restaurant.restaurant.name}</Item.Header>
            <Item.Extra>
              <Label>Cost: {restaurant.restaurant.price}</Label>
              <Label>Rating: {restaurant.restaurant.yelp_rating}</Label>
              <Label>Takout? {restaurant.restaurant.takeout ? <Icon name='thumbs up' /> : <Icon name='thumbs down' />}</Label>
              <Label>Delivery? {restaurant.restaurant.delivery ? <Icon name='thumbs up' /> : <Icon name='thumbs down' />}</Label>
            </Item.Extra>
            <p><strong>Type:</strong> {restaurant.restaurant.category_list}</p>
            <Item.Description>
              {restaurant.restaurant.address}, {restaurant.restaurant.city}, {restaurant.restaurant.state} {restaurant.restaurant.zip_code} - {restaurant.restaurant.display_phone}
            </Item.Description>
        </Item.Content>
      </Item>
    </Segment>

  )
}

export default Restaurant
