import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Image from 'next/image'
import styles from './caseStudyMultipleChoice.module.css';
import MultipleChoiceButton from '../multipleChoiceButton/multipleChoiceButton';


function CaseStudyMultipleChoice(props) {

  return (
    <div id={styles.caseStudyMultipleChoiceContainer}>
      <h1 id={styles.caseStudyMultipleChoiceTitle}>Multiple Choice</h1>
      <p id={styles.caseStudyMultipleChoiceQuestion}>{props.question}</p>
      <div id = {styles.multipleChoiceAnswerContainer}>
        <MultipleChoiceButton id = "1" button_title={props.answer1}></MultipleChoiceButton>
        <MultipleChoiceButton id = "2" button_title={props.answer2}></MultipleChoiceButton>
        <MultipleChoiceButton id = "3" button_title={props.answer3}></MultipleChoiceButton>
        <MultipleChoiceButton id = "4" button_title={props.answer4}></MultipleChoiceButton>
      </div>
    </div>
  );
}

export default CaseStudyMultipleChoice;