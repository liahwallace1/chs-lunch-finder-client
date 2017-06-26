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
      return state.priceFilter.push(action.payload)
    case 'REMOVE_PRICE_FILTER':
      let price_index = state.priceFilter.indexOf(action.payload)
      return state.priceFilter.splice(price_index, 1)
    case 'ADD_LOCATION_FILTER':
      return state.locationFilter.push(action.payload)
      case 'REMOVE_LOCATION_FILTER':
      let location_index = state.locationFilter.indexOf(action.payload)
      return state.locationFilter.splice(location_index, 1)
    default:
      return state
  }
}

export default visibilityFilter
