import React from 'react';

const Button = (props) => {

  const classes = props.classes ? ['Button', props.classes.join(',')]: ['Button'];

  return (
    <button type={props.type} className={classes.join(' ')} >{props.text}</button>
  )
}

export default Button;