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
      return state.priceFilter.push(action.PriceType)
    case 'REMOVE_PRICE_FILTER':
      let price_index = state.priceFilter.indexOf(action.PriceType)
      return state.priceFilter.splice(price_index, 1)
    case 'ADD_LOCATION_FILTER':
      return state.locationFilter.push(action.zip_code)
      case 'REMOVE_LOCATION_FILTER':
      let location_index = state.locationFilter.indexOf(action.zip_code)
      return state.locationFilter.splice(location_index, 1)
    default:
      return state
  }
}

export default visibilityFilter
