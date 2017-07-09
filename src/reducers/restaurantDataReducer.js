const restaurantData = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_RESTAURANT_DATA':
      return action.restaurantData;
    case 'UPDATE_RESTAURANT_DATA':
      return [
        ...state.filter(restaurant => restaurant.id !== action.restaurant.id),
        Object.assign({}, action.restaurant)
      ]
    default:
      return state
  }
}

export default restaurantData
