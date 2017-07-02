export const setRecommendation = (restaurant) => {
  return {
    type: 'SET_RECOMMENDATION', restaurant
  };
}

export const toggleMap = () => {
  return {
    type: 'TOGGLE_MAP'
  };
}

export const updateMapWidth = () => {
  return {
    type: 'UPDATE_MAP_WIDTH'
  };
}
