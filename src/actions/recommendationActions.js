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
