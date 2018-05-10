import React from 'react';
import { convertTemp } from '../../helper';
import moment from 'moment';
import WeatherDetailItem from './WeatherDetailItem/WeatherDetailItem';

const weatherDetail = (props) => {
  const { description, dt_txt, temp, temp_max, temp_min } = props.forecast;
  const date = new Date(dt_txt);
  const formattedDate = moment(date).format('dddd h A');

  return (
    <div className="WeatherDetail">
      <WeatherDetailItem info={description}/>
      <WeatherDetailItem info={convertTemp(temp)} symbol="&#8457;" classes={["WeatherDetail__temp"]}/>
      <WeatherDetailItem info={`${formattedDate}` }/>
      <div className="WeatherDetail-flex-row">
        <WeatherDetailItem info={convertTemp(temp_min)} text="Low: "/>
        <WeatherDetailItem info={convertTemp(temp_max)} text="High: "/>
      </div>
    </div>
  )
}

export default weatherDetail;