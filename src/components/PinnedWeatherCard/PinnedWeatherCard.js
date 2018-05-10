import React from 'react';
import { convertTemp } from '../../helper'
import Link from '../ui/Link/Link';
import WeatherDetailItem from '../WeatherDetail/WeatherDetailItem/WeatherDetailItem';

const pinnedWeatherCard = (props) => {
  const { name, temp, description} = props.item;

  const styles = {
    color: "#2c3e50",
    padding: "10px"
  }
  return (
    <div className="PinnedWeatherCard">
      <WeatherDetailItem info={name}/>
      <WeatherDetailItem info={convertTemp(temp)} symbol="&#8457;"/>
      <WeatherDetailItem info={description}/>
      <Link key="pwc" path={`/details/${name}`} text="view extended forecast" styles={styles} symbol="&#x279E;"/>
    </div>
  )
}

export default pinnedWeatherCard;