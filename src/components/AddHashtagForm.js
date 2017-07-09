import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Button, Dropdown, Form } from 'semantic-ui-react';

const getHashtagOptions = (hashtags) => {
  var options = []
  hashtags.map(hashtag => options.push({key: hashtag.id, text: hashtag.name, value: hashtag.name}))
  return options
}

class AddHashtagForm extends Component {

  render() {
    var hashtagOptions = getHashtagOptions(this.props.hashtag)
    return (
      <Form>
        <Form.Group inline>
          <Dropdown placeholder='Add Hashtag' floating button className='icon' multiple search selection options={hashtagOptions} />
          <Button icon="checkmark" onClick={(e) => this.manageHashtag(e)} />
        </Form.Group>
      </Form>
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
