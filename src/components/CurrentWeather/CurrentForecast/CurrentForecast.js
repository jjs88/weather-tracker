import React from 'react';

const currentForecast = (props) => {
  const {name, description, temp} = props.weather;
  return (
    <div className="CurrentForecast">
      Current forecast for <span className="name--bold">{name}</span>: {description} {temp} &#8457;
    </div>
  )
}

export default currentForecast;