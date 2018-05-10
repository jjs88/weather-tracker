import React from 'react';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';

const Layout = (props) => {
  return (
    <div className="Layout">
      <div className="Layout-inner">
        <CurrentWeather />
        {props.children}
      </div>
    </div>
  )
}

export default Layout;