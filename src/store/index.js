import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import restaurantData from '../reducers/restaurantDataReducer';
import fetchingData from '../reducers/fetchingDataReducer';
import visibilityFilter from '../reducers/visibilityFilterReducer';
import recommendation from '../reducers/recommendationReducer';
import hashtag from '../reducers/hashtagReducer';

const reducers = combineReducers({
  fetchingData,
  restaurantData,
  visibilityFilter,
  recommendation,
  hashtag
})
const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)
