const receiveHashtagOptions = hashtagOptions => {
  return {
    type: 'RECEIVE_HASHTAG_DATA',
    hashtagOptions
  };
}

export const fetchHashtagOptions = () => {
  return dispatch => {
    fetch("/api/hashtags.json")
    .then(res => res.json())
    .then(hashtagOptions => {
      dispatch(receiveHashtagOptions(hashtagOptions))
    })
  }
}
