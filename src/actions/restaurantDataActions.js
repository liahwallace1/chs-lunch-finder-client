import { stopFetchingData } from './fetchingDataActions'
import { setRecommendation } from './recommendationActions'

const receiveRestaurantData = restaurantData => {
  return {
    type: 'RECEIVE_RESTAURANT_DATA',
    restaurantData
  };
}

export const fetchRestaurantData = () => {
  return dispatch => {
    fetch("/api/restaurants.json")
    .then(res => res.json())
    .then(restaurantData => {
      dispatch(receiveRestaurantData(restaurantData))
      dispatch(stopFetchingData())
      dispatch(setRecommendation(restaurantData[Math.floor(Math.random()*restaurantData.length)]))
    })
  }
}
