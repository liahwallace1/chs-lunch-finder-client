import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import logo from '../Pizza-Slice-PNG-File.png';
import './App.css';
import Navbar from '../components/Navbar';

// Routes
import { ConnectedVisibleRestaurantList } from './VisibleRestaurantList';
import { ConnectedRecommendation } from './Recommendation';
import NotFound from '../components/NotFound';

//Actions
import { fetchRestaurantData } from '../actions/restaurantDataActions'
import { stopFetchingData } from '../actions/fetchingDataActions'

class App extends Component {

  componentDidMount() {
    this.props.fetchRestaurantData()
  }

  render() {
    const { fetchingData } = this.props

    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2 className="title">What's for Lunch Charleston?</h2>
            <Navbar />
          </div>

          <div className="App-info">
            {fetchingData ?
              <img src={logo} className="App-logo" alt="logo" />
              :
              <Switch>
                <Route path="/recommendation" component={ConnectedRecommendation} />
                <Route exact path="/" component={ConnectedVisibleRestaurantList}/>
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
    fetchingData: state.fetchingData,
    restaurantData: state.restaurantData
  }), {
    stopFetchingData,
    fetchRestaurantData
  })(App);
