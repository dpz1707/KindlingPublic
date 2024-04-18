import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Image from 'next/image'
import styles from './courseDefinitionSection.module.css';

function CourseDefinitionSection(props) {

  return (
    <div id = {styles.courseDefinitionSectionContainer}>
    <p>{props.definition}</p>
    </div>
  );
}

export default CourseDefinitionSection;