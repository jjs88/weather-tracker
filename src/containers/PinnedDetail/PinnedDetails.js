import React from 'react';
import WeatherDetails from '../WeatherDetails/WeatherDetails';

const pinnedDetail = (props) => {

  const city = props.match.params.city;

  return (
    <div className="PinnedDetail">
      <h1>{city}</h1>
      <WeatherDetails />
    </div>
  )
}

export default pinnedDetail;