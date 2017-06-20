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
    fetch("http://localhost:3001/api/restaurants")
    .then(res => res.json())
    .then(restaurants => {
      console.log(restaurants)
    })
  }

  render() {
    const { fetchingData } = this.state

    return (
      <div className="App">
        <div className="App-header">

          <h2>What's' for Lunch Charleston</h2>
        </div>
        <p className="App-intro">
          {fetchingData ?
            <img src={logo} className="App-logo" alt="logo" />
            :
            <h1>Have data</h1>}
        </p>
      </div>
    );
  }
}

export default App;
