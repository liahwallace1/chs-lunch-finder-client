const hashtag = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_HASHTAG_OPTIONS':
      return action.hashtagOptions;
    default:
      return state
  }
}

export default hashtag
