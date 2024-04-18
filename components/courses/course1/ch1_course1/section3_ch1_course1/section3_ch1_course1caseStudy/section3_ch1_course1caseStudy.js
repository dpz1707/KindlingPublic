import React, { useState } from 'react';
import styles from './section3_ch1_course1caseStudy.module.css';
import CaseStudyDropdown from '../../../../../caseStudyDropdown/caseStudyDropdown';
import White_Button from '../../../../../white_button/white_button';
import { useAuth } from '../../../../../../lib/firebase/auth'
import { submitAnswer } from '../../../../../../lib/utils/submitAnswer';
import { VStack, Text } from '@chakra-ui/react';
import { useStudent } from '../../../../../../lib/mongodb/studentProvider';
import { useRouter } from 'next/router';

const question = {
  question: "True or False: I want funding from a16z for the ability to hire more developers, to sell my product to the GPs, and the extensive network for advice or introductions. ",
  answers: ["True", "False"],
  correctAnswer: "False"
}

function Section1_3CaseStudy(props) {
  const router = useRouter();
  const { user } = useAuth();
  const { student, refetchStudent } = useStudent();


  // Whether the user has submitted the correct answer:
  // null if no submission yet
  // true if correct answer submitted
  // false if incorrect answer submitted
  const defaultSubmittedCorrectAnswer = student.courseProgress?.course_1?.chapter_1?.section_3?.q_1?.complete;
  const defaultSelectedAnswer = defaultSubmittedCorrectAnswer ? question.correctAnswer : null;
  const [selectedAnswer, setSelectedAnswer] = useState(defaultSelectedAnswer);
  const [submittedCorrectAnswer, setSubmittedCorrectAnswer] = useState(defaultSubmittedCorrectAnswer);

  return (
    <div id={styles.rightCourseColumnContainer}>
      <h1 id={styles.caseStudyTitle}>Case Study: </h1>
      <p id={styles.caseStudyParagraph}>
        You are a new hire as General Partner at kindling Ventures, a VC firm that only invests in startups creating wood products, such as furniture and flooring.
      </p>
      <br></br>
      <CaseStudyDropdown disabled={submittedCorrectAnswer === true} question={question.question} answers={question.answers} selection={selectedAnswer} onChange={(event) => { setSelectedAnswer(event.target.value) }}></CaseStudyDropdown>

      {
        submittedCorrectAnswer ? (
          <div id={styles.continueButtonContainer}>
            <White_Button button_title="Continue" onClick={() => {
              router.push("//courses/course1/ch2_course1/section1_ch2_course1");
            }}></White_Button> </div>
        ) : (
          <VStack id={styles.continueButtonContainer}>
            <White_Button button_title="Submit" onClick={() => {
              const isCorrect = selectedAnswer == question.correctAnswer;
              submitAnswer(user.token, "course_1", "chapter_1", "section_3", "q_1", isCorrect).then(() => refetchStudent());
              setSubmittedCorrectAnswer(isCorrect);
            }}></White_Button>
            {submittedCorrectAnswer === false && <Text color='red'>Try again</Text>}
          </VStack>
        )
      }

    </div >
  );
}

export default Section1_3CaseStudy;
