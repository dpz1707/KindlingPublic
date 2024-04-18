import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Image from 'next/image'
import styles from './courseBulletSection.module.css';

function CourseBulletSection(props) {

  return (
    <div id = {styles.courseDefinitionSectionContainer}>
    <li>{props.termDefinition}</li>
    </div>
  );
}

export default CourseBulletSection;