const hashtagData = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_HASHTAG_DATA':
      return action.hashtagData;
    default:
      return state
  }
}

export default hashtagData
