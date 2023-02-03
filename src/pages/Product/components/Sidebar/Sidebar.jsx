import React from 'react';
import Colours from './Colours';
import Genders from './Genders';
import Prices from './Prices';
import styles from './Sidebar.module.css';
import Types from './Types';
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <h3>Colour</h3>
      <Colours />
      <h3>Gender</h3>
      <Genders />
      <h3>Price</h3>
      <Prices />
      <h3>Type</h3>
      <Types />
    </div>
  )
}

export default Sidebar