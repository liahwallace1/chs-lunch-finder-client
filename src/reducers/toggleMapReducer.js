let initialState = {
    visible: false,
    restaurant: {}
  }

const toggleMap = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MAP':
      const newRestaurant = action.rec_restaurant
      return {visible: !state.visible, restaurant: newRestaurant}

    default:
      return state
  }
}

export default toggleMap
