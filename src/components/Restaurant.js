import React from 'react';
import { Item, Label, Icon } from 'semantic-ui-react';
import { ConnectedAddHashtagForm } from './AddHashtagForm';
import './Restaurant.css';

const Restaurant = ({ restaurant, hashtagOptions, manageHashtagCallback }) => {

  return (
    <Item key={restaurant.id}>
      <Item.Image src={restaurant.image_url} size='small'	/>

      <Item.Content verticalAlign='middle'>
        <Item.Header as='a' target="_blank" href={restaurant.yelp_url}>{restaurant.name}</Item.Header>
          <Item.Extra>
            <Label>Cost: {restaurant.price}</Label>
            <Label>Rating: {restaurant.yelp_rating}</Label>
            <Label>Takout? {restaurant.takeout ? <Icon name='thumbs up' /> : <Icon name='thumbs down' />}</Label>
            <Label>Delivery? {restaurant.delivery ? <Icon name='thumbs up' /> : <Icon name='thumbs down' />}</Label>
          </Item.Extra>
          <p><strong>Type:</strong> {restaurant.category_list}</p>
          <Item.Description>
            {restaurant.address}, {restaurant.city}, {restaurant.state} {restaurant.zip_code} - {restaurant.display_phone}
          </Item.Description>
          <Item.Extra className="hashtags">
            Hashtags: {restaurant.hashtags_list.join(", ")}<br />
            <ConnectedAddHashtagForm restaurant={restaurant}/>
          </Item.Extra>
      </Item.Content>
    </Item>

  )
}

export default Restaurant
