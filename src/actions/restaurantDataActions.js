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

export const updateRestaurantHashtags = (hashtags) => {
  return {
    type: 'UPDATE_RESTAURANT_HASHTAGS', hashtags
  }
}

export const postRestaurantHashtags = (restaurant) => {
  return dispatch => {
    fetch(`/api/restaurants/${restaurant.id}`,
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({restaurant: restaurant})
    })
  }
}
