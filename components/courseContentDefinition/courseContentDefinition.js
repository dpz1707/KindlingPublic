import React, { useState } from 'react';
import styles from './courseContentDefinition.module.css';


function CourseContentDefinition(props) {

  return (
    <div className={styles.definitionContainer}>
      <span className={styles.term}>{props.term} </span>
      <div className={styles.definition}>{props.definition}</div>
    </div>
  );
}

export default CourseContentDefinition;
