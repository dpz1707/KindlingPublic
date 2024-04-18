import styles from './course1_leftCourseColumn.module.css'
import LeftCourseColumnSection from '../../../../leftCourseColumnSection/leftCourseColumnSection';

function leftCourseColumn(props) {

  return (
    <div id={styles.leftCourseColumnContainer}>
      <div id={styles.leftCourseColumnTitleContainer}>
        <h1>
          <span id={styles.leftCourseColumnChapterTitle}>{props.chapter}:</span>
          <span id={styles.leftCourseColumnChapterDescription}>{props.chapterDescription}</span>
        </h1>
      </div>
      <div>
        <LeftCourseColumnSection href="/courses/course1/ch2_course1/section1_ch2_course1" sectionTitle="Chapter 2.1"></LeftCourseColumnSection>
        <LeftCourseColumnSection href="/courses/course1/ch2_course1/section2_ch2_course1" sectionTitle="Chapter 2.2"></LeftCourseColumnSection>
        <LeftCourseColumnSection href="/course_home" sectionTitle="Back to Courses"></LeftCourseColumnSection>
      </div>
    </div>
  );
}

export default leftCourseColumn;