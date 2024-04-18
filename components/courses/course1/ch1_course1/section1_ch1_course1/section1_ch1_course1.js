import Section1_1Content from './section1_ch1_course1content/section1_ch1_course1content'
import Chapter1_leftCourseColumn from '../ch1_course1leftCourseColumn/course1_leftCourseColumn'
import Section1_1CaseStudy from './section1_ch1_course1caseStudy/section1_ch1_course1caseStudy'
import styles from './section1_ch1_course1.module.css'

export default function Section1_ch1_course1() {
  return (
    <div className="Courses">
      <Chapter1_leftCourseColumn chapter="Chapter 1" chapterDescription="The VC Basics"></Chapter1_leftCourseColumn>
      <div id={styles.courseRightContent}>
        <Section1_1Content></Section1_1Content>
        <Section1_1CaseStudy></Section1_1CaseStudy>
      </div>
    </div>
  )
}