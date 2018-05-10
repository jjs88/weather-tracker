import React, { Component } from 'react';
import axios from 'axios';
import WeatherDetail from '../../WeatherDetail/WeatherDetail';
import { API_KEY } from '../../../keys'
import { connect } from 'react-redux';
import { currentDetail } from '../../../store/actions/current';
import Spinner from '../../ui/Spinner/Spinner';

class currentExtended extends Component {

  state = {
    list: []
  }

  // componentDidUpdate() {
  //   // this will need to solve if a user goes to /current first
  //   console.log('[UPDATE]', this.props.current);
  // }

  componentDidMount() {
    // data already in store, just render dont go to API
    if(this.props.detail) return;

    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((async (position) => {
        const {latitude:lat, longitude:long} = position.coords;
        const {data: { list }} = await axios(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&APPID=${API_KEY}`);
        const newList = list.filter( (item, idx) => idx < 8 )
        .map(item => {
          const {
            dt,
            dt_txt,
            weather: [
              {
                description
              },
            ],
            main: {
              temp,
              temp_max,
              temp_min
            }
          } = item

          return {dt, dt_txt, description, temp, temp_max, temp_min};
        })
        //call action
        this.props.currentDetail(newList);
      }))
    }
  }

  renderForecast = () => {
    if(!this.props.detail) return <Spinner />;
    return this.props.detail.map( item => <WeatherDetail key={item.dt} forecast={item}/>);
  }

  render() {
    return (
      <div className="CurrentExtended">
        {this.renderForecast()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    current: state.current.current,
    detail: state.current.detail
  }
}

export default connect(mapStateToProps, { currentDetail })(currentExtended);