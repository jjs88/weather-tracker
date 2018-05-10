import React from 'react';
import { Link } from 'react-router-dom';

const link = (props) => {

  const styles = props.styles;
  const classes = props.classes ? ['Link', props.classes.join(',')]: ['Link'];
  
  return <Link to={props.path} className={classes.join(' ')} style={styles}>{props.text} {props.symbol ? props.symbol:null}</Link>
}

export default link;