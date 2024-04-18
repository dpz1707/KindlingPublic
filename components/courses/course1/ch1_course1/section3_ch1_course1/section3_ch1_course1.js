import Section1_3Content from './section3_ch1_course1content/section3_ch1_course1content'
import Chapter1_leftCourseColumn from '../ch1_course1leftCourseColumn/course1_leftCourseColumn'
import Section1_3CaseStudy from './section3_ch1_course1caseStudy/section3_ch1_course1caseStudy'
import styles from './section3_ch1_course1.module.css'

export default function Course1_3() {
  return (
    <div className="Courses">
      <Chapter1_leftCourseColumn chapter="Chapter 1" chapterDescription="The VC Basics"></Chapter1_leftCourseColumn>
      <div id={styles.courseRightContent}>
        <Section1_3Content></Section1_3Content>
        <Section1_3CaseStudy></Section1_3CaseStudy>
      </div>
    </div>
  )
}