import React from 'react';
import ReactDOM from 'react-dom/client';
import Image from 'next/image'
import styles from './courseCard.module.css';
import White_Button from '../white_button/white_button';

function courseCard(props) {

  return (
    <div id={styles.courseCardContainer}>
      <h1 id={styles.courseCardTitle}>{props.cardTitle}</h1>
      <p id={styles.courseCardParagraph}>{props.cardParagraph}</p>
      <div id={styles.courseCardBottom}>
        <br></br>
        <h1 id={styles.courseCardProgress}>{props.sectionsCompleted}/{props.sectionsTotal}</h1>
        <White_Button button_title="Begin"></White_Button>
      </div>
    </div>
  );
}

export default courseCard;