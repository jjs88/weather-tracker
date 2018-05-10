import React from 'react';
import Link from '../../components/ui/Link/Link';
import PinnedWeather from '../PinnedWeather/PinnedWeather';

const dashBoard = (props) => {

  const styles = {
    color: '#2c3e50',
    padding: '20px',
    marginTop: '20px'
  }

  return (
    <div className="Dashboard">
      <PinnedWeather />
      <Link classes={['Dashboard__EditPins']}key="cw3" path="/settings" text="edit pinned cities" styles={styles} symbol="&#x279E;"/>
    </div>
  )
}

export default dashBoard;