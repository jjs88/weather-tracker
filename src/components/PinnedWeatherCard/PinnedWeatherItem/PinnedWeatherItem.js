import React from 'react';

const pinnedWeatherItem = (props) => {

  return (
    <div className="PinnedWeatherItem">{props.text} {props.symbol ? props.symbol:null}</div>
  )
}

export default pinnedWeatherItem;