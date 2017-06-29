// export const toggleFilter = () => {
//   return {
//     type: 'TOGGLE_FILTER',
//   };
// }
export const addPriceFilter = (priceType) => {
  return {
    type: 'ADD_PRICE_FILTER', priceType
  }
}

export const removePriceFilter = (priceType) => {
  return {
    type: 'REMOVE_PRICE_FILTER', priceType
  }
}

export const addLocationFilter = (zip_code) => {
  return {
    type: 'ADD_LOCATION_FILTER', zip_code
  }
}

export const removeLocationFilter = (zip_code) => {
  return {
    type: 'REMOVE_LOCATION_FILTER', zip_code
  }
}

export const addTakeoutFilter = () => {
  return {
    type: 'ADD_TAKEOUT_FILTER'
  }
}

export const removeTakeoutFilter = () => {
  return {
    type: 'REMOVE_TAKEOUT_FILTER'
  }
}
