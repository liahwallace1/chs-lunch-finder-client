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

// export function updateRestaurant(updatedRestaurant) {
//   return (dispatch) => {
//     dispatch({type: 'UPDATE_RESTAURANT_STATE', selectedHashtagsObject})
//   }
// }

const updateRestaurantData = restaurant => {
  return {
    type: 'UPDATE_RESTAURANT_DATA',
    restaurant
  };
}

export const UpdateRestaurant = (updatedRestaurant) => {
  return dispatch => {
    fetch(`/api/restaurants/${updateRestaurant.id}`,
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({restaurant: updatedRestaurant})
    }).then(responseRestaurant => {
      dispatch(updateRestaurantData(responseRestaurant))
    })
  }
}
