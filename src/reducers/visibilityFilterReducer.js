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

    case 'REMOVE_PRICE_FILTER':
      const newPriceFilter = state.priceFilter.filter((item) => item !== action.priceType)
      return { priceFilter: newPriceFilter, locationFilter: [...state.locationFilter]}

      case 'ADD_LOCATION_FILTER':
      return Object.assign({}, state, { priceFilter: [...state.priceFilter], locationFilter: [...state.locationFilter, action.zip_code]})

    case 'REMOVE_LOCATION_FILTER':
      const newLocationFilter = state.locationFilter.filter((item) => item !== action.zip_code)
      return { priceFilter: [...state.priceFilter], locationFilter: newLocationFilter}

    default:
      return state
  }
}

export default visibilityFilter
