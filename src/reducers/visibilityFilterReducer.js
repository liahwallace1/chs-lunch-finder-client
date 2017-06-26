let initialState = {
  visible: true,
  priceFilter: ['$', '$$', '$$$', '$$$$'],
  locationFilter: ['29401', '29403'],
  takeoutFilter: false,
  deliveryFilter: false,
}

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    // case 'TOGGLE_FILTER':
    //   return {visible: state.visible.toggle}
    case 'FILTER_PRICE':
      const checkedPrices = []
      return {priceFilter: restaurantData.filter((restaurant) => restaurant.price == action.price)}
    case 'FILTER_LOCATION':
      return {locationFilter: restaurantData.filter((restaurant) => restaurant.zip_code == action.value)}
    case 'FILTER_TAKEOUT':
      return {takoutFilter: restaurantData.filter((restaurant) => restaurant.takeout)}
      case 'FILTER_DELIVERY':
        return {deliveryFilter: restaurantData.filter((restaurant) => restaurant.delivery)}
    default:
      return state
  }
}

export default visibilityFilter
