import React from 'react';
import Link from '../ui/Link/Link';

const blankPinCard = (props) => {

  const styles = {
    color: '#2c3e50'
  }

  return (
    <div className="BlankPinCard">
      <Link classes={['Dashboard__EditPins']}key="cw3" path="/settings" text="Pin Another City" styles={styles} symbol="&#x0002B;"/>
    </div>
  )
}

export default blankPinCard;