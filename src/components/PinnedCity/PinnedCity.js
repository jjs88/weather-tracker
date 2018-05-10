import React from 'react';
import { connect } from 'react-redux';
import { removePin } from '../../store/actions/pinned';

const pinnedCity = (props) => {
  
  const removeCity = (city) => props.removePin(city);

  return (
    <div className="PinnedCity">
      <span className="fas fa-times PinnedCity__remove" onClick={() => removeCity(props.city)}></span>
      <span className="PinnedCity__item">{props.city}</span>
    </div>
  )
}

export default connect(null, { removePin })(pinnedCity);