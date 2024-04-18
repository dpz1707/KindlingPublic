import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Image from 'next/image'
import styles from './caseStudyFreeResponse.module.css';


function CaseStudyFreeResponse(props) {

  return (
    <div id={styles.caseStudyMultipleChoiceContainer}>
      <h1 id={styles.caseStudyMultipleChoiceTitle}>Free Response</h1>
      <p id={styles.caseStudyFreeResponseQuestion}>{props.question}</p>
      <textarea id={styles.caseStudyMultipleChoiceAnswer} placeholder="Type your answer here"></textarea>
    </div>
  );
}

export default CaseStudyFreeResponse;