import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import Navbar from '../components/Navbar';

// Routes
import Home from '../components/Home';
import { VisibleRestaurantList } from './VisibleRestaurantList';
import { ConnectedRecommendation } from '../components/Recommendation';
import NotFound from '../components/NotFound';

//Actions
import { fetchRestaurantData } from '../actions/restaurantDataActions'
import { stopFetchingData } from '../actions/fetchingDataActions'

class App extends Component {

  componentDidMount() {
    this.props.fetchRestaurantData()
  }

  render() {
    const { fetchingData, restaurantData } = this.props
    console.log(fetchingData)
    console.log(restaurantData)
    return (
      <Router>
        <div className="App">
          <div className="App-header">

            <h2>What's for Lunch Charleston</h2>
          </div>
          <Navbar />
          <div className="App-intro">
            {fetchingData ?
              <img src={logo} className="App-logo" alt="logo" />
              :
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/recommendation" component={ConnectedRecommendation}/>
                <Route exact path="/restaurants" component={ConnectedVisibleRestaurantList}/>
                <Route component={NotFound} />
              </Switch>}
          </div>
        </div>
      </Router>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ fetchRestaurantData: fetchRestaurantData }, dispatch)
// }

export default connect(
  state => ({
    fetchingData: state.fetchingDataReducer,
    restaurantData: state.restaurantDataReducer
  }), {
    stopFetchingData,
    fetchRestaurantData
  })(App);
