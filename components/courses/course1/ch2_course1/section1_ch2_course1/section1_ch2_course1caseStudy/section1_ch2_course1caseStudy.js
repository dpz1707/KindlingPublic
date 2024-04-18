import React, { useState } from 'react';
import styles from './section1_ch2_course1caseStudy.module.css';
import CaseStudyDropdown from '../../../../../caseStudyDropdown/caseStudyDropdown'
import White_Button from '../../../../../white_button/white_button';
import { useAuth } from '../../../../../../lib/firebase/auth'
import { submitAnswer } from '../../../../../../lib/utils/submitAnswer';
import { VStack, Text } from '@chakra-ui/react';
import { useStudent } from '../../../../../../lib/mongodb/studentProvider';
import { useRouter } from 'next/router';

const question = {
  question: "Why would a VC firm in the 1980s invest in a “high-tech” startup who wouldn’t pass the screening phase of the deal flow process in any other decade? The firm wants to invest in the: ",
  answers: ["startup’s founders", "industry", "differentiated technology", "product offering"],
  correctAnswer: "industry"
}

function Section1_1CaseStudy(props) {
  const router = useRouter();
  const { user } = useAuth();
  const { student, refetchStudent } = useStudent();


  // Whether the user has submitted the correct answer:
  // null if no submission yet
  // true if correct answer submitted
  // false if incorrect answer submitted
  const defaultSubmittedCorrectAnswer = student.courseProgress?.course_1?.chapter_2?.section_1?.q_1?.complete;
  const defaultSelectedAnswer = defaultSubmittedCorrectAnswer ? question.correctAnswer : null;
  const [selectedAnswer, setSelectedAnswer] = useState(defaultSelectedAnswer);
  const [submittedCorrectAnswer, setSubmittedCorrectAnswer] = useState(defaultSubmittedCorrectAnswer);

  return (
    <div id={styles.rightCourseColumnContainer}>
      <h1 id={styles.caseStudyTitle}>Case Study: </h1>
      <p id={styles.caseStudyParagraph}>
        In 1999, Kleiner Perkins & Sequoia Capital, two of the biggest venture capital firms, investing $25 million in Google for 20% equity in the company.
      </p>
      <br></br>
      <CaseStudyDropdown disabled={submittedCorrectAnswer === true} question={question.question} answers={question.answers} selection={selectedAnswer} onChange={(event) => { setSelectedAnswer(event.target.value) }}></CaseStudyDropdown>

      {
        submittedCorrectAnswer ? (
          <div id={styles.continueButtonContainer}>
            <White_Button button_title="Continue" onClick={() => { router.push("/courses/course1/ch2_course1/section2_ch2_course1"); }} /> </div>
        ) : (
          <VStack id={styles.continueButtonContainer}>
            <White_Button button_title="Submit" onClick={() => {
              const isCorrect = selectedAnswer == question.correctAnswer;
              submitAnswer(user.token, "course_1", "chapter_2", "section_1", "q_1", isCorrect).then(() => refetchStudent());
              setSubmittedCorrectAnswer(isCorrect);
            }}></White_Button>
            {submittedCorrectAnswer === false && <Text color='red'>Try again</Text>}
          </VStack>
        )
      }

    </div >
  );
}

export default Section1_1CaseStudy;