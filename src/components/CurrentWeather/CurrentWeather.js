import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentWeather } from '../../store/actions/current';
import CurrentForecast from './CurrentForecast/CurrentForecast';
import { fetchCurrentWeather } from './helper';
import Link from '../ui/Link/Link';


class CurrentWeather extends Component {

  componentDidMount() {
    // use helper method to not clutter the component
    fetchCurrentWeather(this.props);
  }


  render() {

    const styles = {
      color: '#2ecc71',
      padding: '20px',

    }


    let content = <div className="CurrentForecast">loading...</div>;
    if(this.props.current) {
      content = [
        <CurrentForecast key="cw1" weather={this.props.current}/>,
        <Link key="cw2" path="/dashboard" text="dashboard" styles={styles} classes={['Pull-Right']}/>,
        <Link key="cw3" path="/current" text="view extended forecast" styles={styles}/>
      ]
    }

    return (
      <div className="CurrentWeather">
      {content}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    current: state.current.current
  }
}

export default connect(mapStateToProps, { currentWeather })(CurrentWeather);