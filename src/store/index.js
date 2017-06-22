import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import restaurantDataReducer from '../reducers/restaurantDataReducer';
import fetchingDataReducer from '../reducers/fetchingDataReducer';
import filterReducer from '../reducers/filterReducer';

const reducers = combineReducers({
  fetchingDataReducer,
  restaurantDataReducer,
  filterReducer,
})
const middleware = [thunk]

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)
