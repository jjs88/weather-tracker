import React from 'react';

const PinCityFormItem = (props) => {

  const classes = props.valid ? ['PinCityFormItem']: ['PinCityFormItem', 'Invalid']

  switch(props.type) {
    case 'text':
      return (
        <input className="PinCityFormItem" type="text" name={props.name}placeholder="enter zip code" onChange={ (e) => props.handler(e)}/> 
      )
    default:
      return null;
  }
}

export default PinCityFormItem;