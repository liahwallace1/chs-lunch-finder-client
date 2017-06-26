const restaurantData = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_RESTAURANT_DATA':
      return action.restaurantData;
    default:
      return state
  }
}

export default restaurantData
