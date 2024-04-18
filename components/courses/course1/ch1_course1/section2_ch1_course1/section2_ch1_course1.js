import Section1_2Content from './section2_ch1_course1content/section2_ch1_course1content'
import Chapter1_leftCourseColumn from '../ch1_course1leftCourseColumn/course1_leftCourseColumn'
import Section1_2CaseStudy from './section2_ch1_course1caseStudy/section2_ch1_course1caseStudy'
import styles from './section2_ch1_course1.module.css'

export default function Course1_2() {
  return (
    <div className="Courses">
      <Chapter1_leftCourseColumn chapter="Chapter 1" chapterDescription="The VC Basics"></Chapter1_leftCourseColumn>
      <div id={styles.courseRightContent}>
        <Section1_2Content></Section1_2Content>
        <Section1_2CaseStudy></Section1_2CaseStudy>
      </div>
    </div>
  )
}