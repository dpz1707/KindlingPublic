import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Image from "next/image";
import styles from "./leftCourseColumn.module.css";
import LeftCourseColumnSection from "../leftCourseColumnSection/leftCourseColumnSection";

function LeftCourseColumn(props) {
  return (
    <div id={styles.leftCourseColumnContainer}>
      <div id={styles.leftCourseColumnTitleContainer}>
        <h1>
          <span id={styles.leftCourseColumnChapterTitle}>{props.chapter}:</span>
          <span id={styles.leftCourseColumnChapterDescription}>
            {props.chapterDescription}
          </span>
        </h1>
      </div>
      <div>
        <LeftCourseColumnSection sectionTitle="Chapter 1.1"></LeftCourseColumnSection>
        <LeftCourseColumnSection sectionTitle="Chapter 1.2"></LeftCourseColumnSection>
        <LeftCourseColumnSection sectionTitle="Chapter 1.3"></LeftCourseColumnSection>
        <LeftCourseColumnSection sectionTitle="Chapter 1.4"></LeftCourseColumnSection>
        <LeftCourseColumnSection sectionTitle="Chapter 1.5"></LeftCourseColumnSection>
      </div>
    </div>
  );
}

export default LeftCourseColumn;
