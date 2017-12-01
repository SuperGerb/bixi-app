import React, { Component } from 'react';

function StationList(props) {
  //props.stations.length > 0  ?  props.stations[1].id : null;

  const bixiStations = props.filteredStations.map(function (value, index) {
    var bikeSpots = value.ba + value.da;
    var bikes = [];
    for (var i = 0; i < bikeSpots; i++) {
      if (i < value.ba) {
        bikes.push(<li className="bike-avail-icon"></li>)
      } else {
        bikes.push(<li className="dock-avail-icon"></li>);
      }
    }
    return (
      <li key={index}>
        <h2>{value.s}</h2>
        <p>Bikes available: {value.ba}</p>
        <p>Total bikes: {value.ba + value.da}</p>
        <ul className="bike-icons">{bikes}</ul>
      </li>
    )
  })

  return (
    <ul>
      {bixiStations}
    </ul>
  )
}

export default StationList;

