import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import { reducert as filterReducer, filterActions } from 'redux-filter';
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
  filters: {
    restaurants: window.RESTAURANTS,
    filterableCriteria: [
      {
        title: 'price',
        attribute: 'price'
    },
      {
        title: 'location',
        attribute: 'zip_code'
      },
      {
        title: 'features',
        attribute: 'takeout',
        attribute: 'delivery'
      }
    ],
    searchKeys: ['title'],
  }
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)

store.dispatch(filterActions.init());
