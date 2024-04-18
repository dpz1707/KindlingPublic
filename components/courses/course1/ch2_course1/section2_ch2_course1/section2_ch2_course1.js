import Section2_1Content from './section2_ch2_course1content/section2_ch2_course1content'
import Chapter1_leftCourseColumn from '../ch2_course1leftCourseColumn/course1_leftCourseColumn'
import Section2_1CaseStudy from './section2_ch2_course1caseStudy/section2_ch2_course1caseStudy'
import styles from './section2_ch2_course1.module.css'

export default function Section2_ch1_course1() {
  return (
    <div className="Courses">
      <Chapter1_leftCourseColumn chapter="Chapter 2" chapterDescription="Deal Flow Process"></Chapter1_leftCourseColumn>
      <div id={styles.courseRightContent}>
        <Section2_1Content></Section2_1Content>
        <Section2_1CaseStudy></Section2_1CaseStudy>
      </div>
    </div>
  )
}