import React from 'react';
import virusimage from '../../img/covid.jpg'
import styles from './card.module.css'


const Card = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <img src={virusimage} alt="" />
      <div className={styles.card_inner}>
        <h3>{title}</h3>
        <p>total:{description.total}</p>
        <p>new:{description.new}</p>
      </div>
    </div>
  );
};

export default Card;