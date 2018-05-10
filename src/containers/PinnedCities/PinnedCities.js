import React, { Component } from 'react';
import PinnedCity from '../../components/PinnedCity/PinnedCity';
import { connect } from 'react-redux';

class pinnedCities extends Component {

  renderCities = () => {
    if(this.props.cities.length === 0) return <div className="PinnedCities__select">Please select a city</div>
    return this.props.cities.map((city, idx) => <PinnedCity key={idx} city={city.name}/>)
  }

  render() {
    return (
      <div className="PinnedCities">
        {this.renderCities()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cities: state.pinned
  }
}

export default connect(mapStateToProps)(pinnedCities);