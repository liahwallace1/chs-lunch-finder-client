import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import Home from '../components/Home';
import { ConnectedRestaurants } from './Restaurants';
import Recommendation from '../components/Recommendation';
import NotFound from '../components/NotFound';
import { fetchRestaurantData } from '../actions/restaurantDataActions'
import { stopFetchingData } from '../actions/fetchingDataActions'

class App extends Component {

  // componentDidMount() {
  //   fetch("/api/restaurants.json")
  //   .then(res => res.json())
  //   .then(restaurantData =>
  //     restaurantData.map((restaurant) => {
  //       this.props.addRestaurant(restaurant)
  //     }),
  //     this.props.stopFetchingData
  //   )
  // }

  render() {
    const { fetchingData, restaurantData } = this.props
    console.log(fetchingData)
    console.log(restaurantData)
    return (
      <Router>
        <div className="App">
          <div className="App-header">

            <h2>What's' for Lunch Charleston</h2>
          </div>
          <div className="App-intro">
            {fetchingData ?
              <img src={logo} className="App-logo" alt="logo" />
              :
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/recommendation" component={Recommendation}/>
                <Route exact path="/restaurants" component={ConnectedRestaurants}/>
                <Route component={NotFound} />
              </Switch>}
          </div>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchRestaurantData: fetchRestaurantData }, dispatch)
}

export default connect(
  state=> ({
    fetchingData: state.fetchingData,
    restaurantData: state.restaurantData
  }), {
    stopFetchingData,
    fetchRestaurantData
  })(App);
