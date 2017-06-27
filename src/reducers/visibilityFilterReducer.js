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
      let newPriceFilter = state.priceFilter.slice();
      newPriceFilter.splice(action.priceFilter, 1)
      return { priceFilter: newPriceFilter, locationFilter: [...state.locationFilter]})
    
      case 'ADD_LOCATION_FILTER':
      return Object.assign({}, state, { priceFilter: [...state.priceFilter], locationFilter: [...state.locationFilter, action.zip_code]})
          
    case 'REMOVE_LOCATION_FILTER':
      let newLocationFilter = state.locationFilter.slice();
      newLocationFilter.splice(action.locationFilter, 1)
      return { priceFilter: [...state.priceFilter], locationFilter: newLocationFilter})
      
    default:
      return state
  }
}

export default visibilityFilter
