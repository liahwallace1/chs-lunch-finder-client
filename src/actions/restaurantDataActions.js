import "isomorphic-fetch"

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
    fetch(`https://chs-lunch-finder-api.herokuapp.com/api/restaurants.json`,
    {method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': 'https://chs-lunch-finder.herokuapp.com'
    }
  })
    .then(res => res.json())
    .then(restaurantData => {
      dispatch(receiveRestaurantData(restaurantData))
      dispatch(stopFetchingData())
      dispatch(setRecommendation(restaurantData[Math.floor(Math.random()*restaurantData.length)]))
    })
  }
}

const updateRestaurantData = restaurantData => {
  return {
    type: 'UPDATE_RESTAURANT_DATA',
    restaurantData
  };
}

export const updateRestaurant = (updatedRestaurant) => {
  return dispatch => {
    fetch(`https://chs-lunch-finder-api.herokuapp.com/api/restaurants/${updatedRestaurant.id}.json`,
    {
        method: "PUT",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Origin': 'https://chs-lunch-finder.herokuapp.com'
        },
        body: JSON.stringify(updatedRestaurant)
    }).then(response => response.json())
      .then(responseRestaurantData => {
        dispatch(updateRestaurantData(responseRestaurantData))
    })
  }
}
