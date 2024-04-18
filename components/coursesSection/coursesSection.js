import React from "react";
import styles from "./coursesSection.module.css";
import CourseCard from "../courseCard/courseCard";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useStudent } from "../../lib/mongodb/studentProvider"

function CoursesSection(props) {
  const { student } = useStudent();

  const chapter1Progress = Object.values(student.courseProgress?.course_1?.chapter_1 ?? {}).reduce((acc, section) => acc + Object.values(section).reduce((acc, question) => question.complete ? acc + 1 : acc, 0), 0);
  const chapter2Progress = Object.values(student.courseProgress?.course_1?.chapter_2 ?? {}).reduce((acc, section) => acc + Object.values(section).reduce((acc, question) => question.complete ? acc + 1 : acc, 0), 0);
  const chapter3Progress = Object.values(student.courseProgress?.course_1?.chapter_3 ?? {}).reduce((acc, section) => acc + Object.values(section).reduce((acc, question) => question.complete ? acc + 1 : acc, 0), 0);

  const router = useRouter();
  return (
    <div id={styles.coursesContainer}>
      <h1 id={styles.courseTitle}>{props.courseSectionTitle}</h1>
      <p id={styles.courseParagraph}>
        The kindling VC Course can be completed anywhere, anytime from your mobile device or laptop. Beginning by defining what a venture capital firm is, we’ll walk you through how to source deals, conduct due diligence, value startups, manage the portfolio companies, decide on an exit strategy, and ultimately have the technical understanding and training to succeed in the venture capital ecosystem.
      </p>
      <Flex
        width="full"
        backgroundColor="#FFAF2"
        display="flex"
        p="24px 0px"
        overflow="scroll"
      >
        <CourseCard
          cardTitle="1. The Basics"
          sectionsCompleted={`${chapter1Progress}`}
          sectionsTotal="3"
          pointOne="What is Venture Capital?"
          pointTwo="Who are the major players, and what do they do?"
          pointThree="Why do startups want investments from Venture Capital Firms?" onClick={() => {
            router.push("/courses/course1/ch1_course1/section1_ch1_course1");
          }}
        ></CourseCard>

        <CourseCard
          cardTitle="2. Deal Flow"
          sectionsCompleted={`${chapter2Progress}`}
          sectionsTotal="2"
          pointOne="How do VC Firms discover the startups they might invest in?"
          pointTwo="How do VC Firms determine which startups to invest in?"
          pointThree="What is the role of the term sheet?" onClick={() => {
            router.push("/courses/course1/ch2_course1/section1_ch2_course1");
          }}
        ></CourseCard>

        <CourseCard
          cardTitle="3. Valuations"
          sectionsCompleted={`${chapter3Progress}`}
          sectionsTotal="1"
          pointOne="How do VC Firms assign a monetary value to startups?"
          pointTwo="What are pre-revenue and post-revenue startups?"
          pointThree="What extrinsic factors affect valuation?" onClick={() => {
            router.push("/courses/course1/ch3_course1/section1_ch3_course1");
          }}
        ></CourseCard>
      </Flex>
    </div>
  );
}

export default CoursesSection;
