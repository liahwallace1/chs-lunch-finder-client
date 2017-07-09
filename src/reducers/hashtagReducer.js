let initialState = {
    hashtagOptions: [],
    selectedHashtags: []
  }

const hashtag = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_HASHTAG_OPTIONS':
      return Object.assign({}, state, { hashtagOptions: action.hashtagOptions, selectedHashtags: [...state.selectedHashtags]})
    case 'ADD_SELECTED_HASHTAG':
      return Object.assign({}, state, { hashtagOptions: [state.hashtagOptions], selectedHashtags: action.selectedHashtags})
    default:
      return state
  }
}

export default hashtag
