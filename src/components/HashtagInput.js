import React from 'react';
import { connect } from 'react-redux';
import { Icon, Button, Dropdown } from 'semantic-ui-react';

class Filter extends Component {

  componentWillMount() {
    var options = []
    this.props.hashtag.map(hashtag => options.push({key: hashtag.id, text: hashtag.name, value: hashtag.name}))
    return options
  }

  render() {
    return (
      <Button.Group>
      <Dropdown placeholder='Add Hashtag' floating button className='icon' multiple search selection options={hashtagOptions} />
      <Button icon="checkmark" onClick={manageHashtag} />
      </Button.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantData: state.restaurantData,
    hashtag: state.hashtag,
  }
}

export const ConnectedHashtagInput = connect(mapStateToProps)(HashtagInput)
