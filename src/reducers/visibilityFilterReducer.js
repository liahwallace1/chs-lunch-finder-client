let initialState = {
  restaurantFilters: [
    {priceFilter: []},
    {locationFilter: []},
  ]
}

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    // case 'TOGGLE_FILTER':
    //   return {visible: state.visible.toggle}
    case 'ADD_PRICE_FILTER':
      return state.restaurantFilters[0].priceFilter.push(action.payload)
    case 'REMOVE_PRICE_FILTER':
      let price_index = state.restaurantFilters[0].priceFilter.indexOf(action.payload)
      return state.restaurantFilters[0].priceFilter.splice(price_index, 1)
    case 'ADD_LOCATION_FILTER':
      return state.restaurantFilters[1].locationFilter.push(action.payload)
      case 'REMOVE_LOCATION_FILTER':
      let location_index = state.restaurantFilters[1].locationFilter.indexOf(action.payload)
      return state.restaurantFilters[1].locationFilter.splice(location_index, 1)
    default:
      return state
  }
}

export default visibilityFilter
