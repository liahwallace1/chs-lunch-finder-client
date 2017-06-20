import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fetchingData: true,
      restaurantData: []
    }
  }

  componentDidMount() {
    fetch("/api/restaurants.json")
    .then(res => res.json())
    .then(restaurantData => this.setState({
      fetchingData: false,
       restaurantData }))
  }

  render() {
    const { fetchingData, restaurantData } = this.state
    console.log(fetchingData)
    console.log(restaurantData)
    return (
      <div className="App">
        <div className="App-header">

          <h2>What's' for Lunch Charleston</h2>
        </div>
        <div className="App-intro">
          {fetchingData ?
            <img src={logo} className="App-logo" alt="logo" />
            :
            <h1>Have data</h1>}
        </div>
      </div>
    );
  }
}

export default App;
