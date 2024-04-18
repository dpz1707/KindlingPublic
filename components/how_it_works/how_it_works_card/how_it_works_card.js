import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import styles from './how_it_works_card.module.css';
import Image from 'next/image'
import People from './people_icon.png'

function How_It_Works_Card(props) {

  return (
    <div className='howItWorksCardContainer' id={styles.howItWorksCardContainer}>
      <Image
        src={People}
        id={styles.cardIcon}
        placeholder="blur" // Optional blur-up while loading
        alt=""
      />
      <h1 id={styles.howItWorksTitleCardTitle}>{props.title}</h1>
      <p id={styles.howItWorksTitleCardParagraph}>
        {props.paragraph}
      </p>
    </div>
  );
}

export default How_It_Works_Card;