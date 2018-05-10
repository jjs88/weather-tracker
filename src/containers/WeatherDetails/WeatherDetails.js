import React from 'react';
import { withRouter } from 'react-router';
import WeatherDetail from '../../components/WeatherDetail/WeatherDetail';
import { connect } from 'react-redux';

const weatherDetails = (props) => {

  const renderDetails = () => {
    if(!props.match.params.city) return null;
    const city = props.match.params.city;
    const [ weather ] = props.pinned.filter(item => item.name === city);
    //pass the detail to the WeaherDetail component
    // weather.detail.map(forecast => console.log(forecast));
    return weather.detail.map( (forecast, idx) => <WeatherDetail key={idx} forecast={forecast}/>)
  }

  return (
    <div className="WeatherDetails">
      {/* details */}
      {renderDetails()}
    </div>
  )
}

function mapStateToProps(state) {
  // console.log(state);
  return {
    pinned: state.pinned
  }
}

export default connect(mapStateToProps)(withRouter(weatherDetails));