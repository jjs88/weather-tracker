import React, { Component } from 'react';
import PinCityForm from '../../components/PinCityForm/PinCityForm';
import PinnedCities from '../../containers/PinnedCities/PinnedCities';

class Settings extends Component {

  render() {
    return (
      <div className="Settings">
        <h2>Pinned Cities</h2>
        <PinnedCities />
        <PinCityForm />
      </div>
    )
  }
}


export default Settings;