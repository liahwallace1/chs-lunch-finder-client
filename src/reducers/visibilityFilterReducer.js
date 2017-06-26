let initialState = {
    priceFilter: [],
    locationFilter: [],
  }

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    // case 'TOGGLE_FILTER':
    //   return {visible: state.visible.toggle}
    case 'ADD_PRICE_FILTER':
      return Object.assign({}, state, { priceFilter: [...state.priceFilter, action.priceType], locationFilter: [...state.locationFilter]})

    // case 'REMOVE_PRICE_FILTER':
    //   debugger
    //   let price_index = state.restaurantFilters[0].priceFilter.indexOf(action.priceType)
    //   return state.restaurantFilters[0].priceFilter.splice(price_index, 1)
    case 'ADD_LOCATION_FILTER':
      return Object.assign({}, state, { priceFilter: [...state.priceFilter], locationFilter: [...state.locationFilter, action.zip_code]})
    //   case 'REMOVE_LOCATION_FILTER':
    //   let location_index = state.restaurantFilters[1].locationFilter.indexOf(action.zip_code)
    //   return state.restaurantFilters[1].locationFilter.splice(location_index, 1)
    default:
      return state
  }
}

export default visibilityFilter
