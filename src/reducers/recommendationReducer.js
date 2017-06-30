let initialState = {
    map_visible: false,
    restaurant: {}
  }

const recommendation = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECOMMENDATION':
      return {map_visible: state.map_visible, restaurant: action.restaurant}
    case 'TOGGLE_MAP':
      return {map_visible: !state.map_visible, restaurant: state.restaurant}

    default:
      return state
  }
}

export default recommendation
