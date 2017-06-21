function manageRestaurants(state = {restaurants: []}, action){
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return Object.assign({}, state, {restaurants: [...state.restaurants, action.restaurant]});
    default:
      return state
  }
}

export default manageRestaurants
