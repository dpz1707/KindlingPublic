import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Image from 'next/image'
import styles from './leftCourseColumnSection.module.css';
import Link from 'next/link';

function LeftCourseColumnSection(props) {

  return (
    <Link href={props.href}>
      <div id={styles.LeftCourseColumnSectionContainer}>
        {props.sectionTitle}
      </div>
    </Link>
  );
}

export default LeftCourseColumnSection;