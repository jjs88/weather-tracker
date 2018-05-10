import React from 'react';
import { connect } from 'react-redux';
import PinnedWeatherCard from '../../components/PinnedWeatherCard/PinnedWeatherCard';
import BlankPinCard from '../../components/BlankPinCard/BlankPinCard';
import Aux from '../hoc/Aux';

const pinnedWeather = (props) => {

  const renderPins = () => {
    return props.pinned.map( (item, idx) => {
      return <PinnedWeatherCard key={idx} item={item.current}/>;
    })
  }

  const renderNoPins = () => {
    //base on the length, render BlankPinCards
    const length = props.pinned.length;

    switch(length) {
      case 0:
        return (
          <Aux>
          <BlankPinCard />
          <BlankPinCard />
          <BlankPinCard />
          </Aux>
        )
      case 1:
        return (
          <Aux>
          <BlankPinCard />
          <BlankPinCard />
          </Aux>
        )
      case 2:
      return (
        <BlankPinCard />
      )
      default:
        return null;
    }
  }

  return (
    <div className="PinnedWeather">
      {renderPins()}
      {renderNoPins()}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    pinned: state.pinned
  }
}

export default connect(mapStateToProps)(pinnedWeather);