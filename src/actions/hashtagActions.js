import "isomorphic-fetch"

const receiveHashtagOptions = hashtagOptions => {
  return {
    type: 'RECEIVE_HASHTAG_OPTIONS',
    hashtagOptions
  };
}

export const fetchHashtagOptions = () => {
  return dispatch => {
    fetch(`https://chs-lunch-finder-api.herokuapp.com/api/hashtags.json`,
    {method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://chs-lunch-finder.herokuapp.com/'
    }
  })
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
