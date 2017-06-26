import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import restaurantData from '../reducers/restaurantDataReducer';
import fetchingData from '../reducers/fetchingDataReducer';
import visibilityFilter from '../reducers/visibilityFilterReducer';

const reducers = combineReducers({
  fetchingData,
  restaurantData,
  visibilityFilter,
})
const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)
