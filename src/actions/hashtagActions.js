const receiveHashtagOptions = hashtagOptions => {
  return {
    type: 'RECEIVE_HASHTAG_OPTIONS',
    hashtagOptions
  };
}

export const fetchHashtagOptions = () => {
  return dispatch => {
    fetch("https://chs-lunch-finder-api.herokuapp.com/api/hashtags")
    .then(res => res.json())
    .then(hashtagOptions => {
      dispatch(receiveHashtagOptions(hashtagOptions))
    })
  }
}

export const addSelectedHashtag = (restaurantId, selectedHashtags) => {
  return {
    type: 'ADD_SELECTED_HASHTAG', restaurantId, selectedHashtags
  }
}
