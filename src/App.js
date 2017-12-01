import React, { Component } from 'react';
import './App.css';
import StationList from './components/StationList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],
      filteredStations: []
    }
  }

  componentDidMount() {
    const scope = this; 

    // setInterval(function(){
    fetch('https://secure.bixi.com/data/stations.json', {
      method: 'get'
      //Handle the response: 
    }).then(function (response) {
      if (response.status !== 200) {
        console.log("Problem with fetch in componentDidMount.");
      } else {
        return response.json();
      }
      //Do something with the data:
    }).then(function (data) {
      scope.setState({
        stations: data.stations,
        filteredStations: data.stations
      });
      //Catch other errors:
    }).catch(function (err) {
      console.log("Error message: ", err);
    });
    // console.log("Fetching new data");
    // }, 5000) 
  }

  handleChange = (event) => {
    var stationSearch = event.target.value;
    var filteredStationsArray = this.state.stations.filter(function (station) {
      return (
        station.s.toLowerCase().indexOf(stationSearch.toLowerCase()) !== -1
      )
    });
    this.setState({
      filteredStations: filteredStationsArray
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">BIXI APP</h1>
          <h2>Find available bikes</h2>
          <p className="App-search">Search for a station: <input onChange={this.handleChange} /></p>
        </header>
        <StationList filteredStations={this.state.filteredStations} />
      </div>
    );
  }
}

export default App;
