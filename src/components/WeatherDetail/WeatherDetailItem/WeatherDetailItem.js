import React from 'react';

const weatherDetailItem = (props) => {
  // if classes passed, use them, else just use base class
  let classes = props.classes ? ['WeatherDetail__item',   props.classes.join(',')]: ['WeatherDetail__item']

  return (
    <div className={classes.join(' ')}>
      {props.text? props.text:null}
      {props.info}
      {props.symbol ? props.symbol:null}
    </div>
  )
}

export default weatherDetailItem;