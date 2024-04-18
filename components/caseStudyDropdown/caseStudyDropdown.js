import React from 'react';
import styles from './caseStudyDropdown.module.css';


function CaseStudyDropdown(props) {
  return (
    <div id={styles.caseStudyMultipleChoiceContainer}>
      <h1 id={styles.caseStudyMultipleChoiceTitle}>Multiple Choice</h1>
      <h1 id={styles.caseStudyDropdownQuestion}>{props.question}</h1>

      <select id={styles.dropdownAnswerSelector} onChange={props.onChange} value={props.selection} disabled={props.disabled}>
        <option id={styles.dropdownAnswer} selected disabled hidden>
          Select an Option
        </option>
        {props.answers.map((answer) => <option id={styles.dropdownAnswer} key={answer} value={answer}>{answer}</option>)}
      </select>
    </div>
  );
}

export default CaseStudyDropdown;