import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dropdown, Form, Modal, Image, Header } from 'semantic-ui-react';
import { addSelectedHashtag, sendRestaurantHashtags } from '../actions/hashtagActions';
import { updateRestaurantState } from '../actions/restaurantDataActions';

const getHashtagOptions = (hashtags) => {
  var options = []
  hashtags.map(hashtag => options.push({key: hashtag.id, text: hashtag.name, value: hashtag.name}))
  return options
}

class AddHashtagForm extends Component {

  setValue(e, data) {
    this.props.dispatch(addSelectedHashtag(this.props.restaurant.id, data.value))
  }

  handleSubmit(e) {
    e.preventDefault();
    var data = this.props.hashtag.selectedHashtags
    var restaurant = this.props.restaurantData.filter(r => r.id === data.restaurantId)[0]
    var combinedHashtags = restaurant.hashtags_list.concat(data.hashtags).filter((x, i, a) => a.indexOf(x) === i)
    var updatedRestaurant = Object.assign({}, restaurant, {
      hashtags_list: combinedHashtags})
      console.log(updatedRestaurant)
    // this.props.dispatch(updateRestaurant(updatedRestaurant))
  }

  render() {
    var hashtagOptions = getHashtagOptions(this.props.hashtag.hashtagOptions)
    return (
      <Modal trigger={<Button size='small'>Add Hashtag</Button>} closeIcon='close'
      >
        <Modal.Header>Add a Hashtag:</Modal.Header>
        <Modal.Content>
         <Image wrapped size='small' src={this.props.restaurant.image_url} floated='left' />
         <Modal.Description>
           <Header>{this.props.restaurant.name}</Header>
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <Form.Group inline>
                <Dropdown placeholder='Add Hashtag' floating button className='icon' multiple search selection options={hashtagOptions} onChange={this.setValue.bind(this)}/>
                <Button icon="checkmark" type='submit' />
              </Form.Group>
            </Form>
          </Modal.Description>
        </Modal.Content>

      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantData: state.restaurantData,
    hashtag: state.hashtag,
  }
}

export const ConnectedAddHashtagForm = connect(mapStateToProps)(AddHashtagForm)
