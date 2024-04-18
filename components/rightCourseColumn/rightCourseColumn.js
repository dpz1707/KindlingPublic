import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Image from 'next/image'
import styles from './rightCourseColumn.module.css';
import CaseStudyMultipleChoice from '../caseStudyMultipleChoice/caseStudyMultipleChoice';
import White_Button from '../white_button/white_button';

function RightCourseColumn(props) {
  return (
    <div id={styles.rightCourseColumnContainer}>
      <h1 id={styles.caseStudyTitle}>Case Study: </h1>
      <p id={styles.caseStudyParagraph}>
        In 1999, Kleiner Perkins & Sequoia Capital, two of the biggest venture capital firms, investing $25 million in Google for 20% equity in the company.
      </p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
        In 1999, Kleiner Perkins & Sequoia Capital, two of the biggest venture capital firms, investing $25 million in Google for 20% equity in the company.
      </p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
        In 1999, Kleiner Perkins & Sequoia Capital, two of the biggest venture capital firms, investing $25 million in Google for 20% equity in the company.
      </p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
        In 1999, Kleiner Perkins & Sequoia Capital, two of the biggest venture capital firms, investing $25 million in Google for 20% equity in the company.
      </p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
        In 1999, Kleiner Perkins & Sequoia Capital, two of the biggest venture capital firms, investing $25 million in Google for 20% equity in the company.
      </p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
        In 1999, Kleiner Perkins & Sequoia Capital, two of the biggest venture capital firms, investing $25 million in Google for 20% equity in the company.
      </p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
        In 1999, Kleiner Perkins & Sequoia Capital, two of the biggest venture capital firms, investing $25 million in Google for 20% equity in the company.
      </p>
      <CaseStudyMultipleChoice></CaseStudyMultipleChoice>
      <div id = {styles.continueButtonContainer}>
        <White_Button button_title="Continue"></White_Button>
      </div>
    </div>
  );
}

export default RightCourseColumn;