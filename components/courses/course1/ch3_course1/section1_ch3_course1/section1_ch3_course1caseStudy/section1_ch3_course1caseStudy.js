import React, { useState } from 'react';
import styles from './section1_ch3_course1caseStudy.module.css';
import CaseStudyDropdown from '../../../../../caseStudyDropdown/caseStudyDropdown'
import White_Button from '../../../../../white_button/white_button';
import { useAuth } from '../../../../../../lib/firebase/auth'
import { submitAnswer } from '../../../../../../lib/utils/submitAnswer';
import { VStack, Text } from '@chakra-ui/react';
import { useStudent } from '../../../../../../lib/mongodb/studentProvider';
import { useRouter } from 'next/router';
import graph from "./Group10.svg";
import Image from 'next/image';


const question = {
  question: "What is Fireside’s Discounted Cash Flow in Year 1? ",
  answers: ["$952,381", "$1,900,000", "$1,904,762", "$1,907,363"],
  correctAnswer: "$1,904,762"
}

function Section1_1CaseStudy(props) {
  const router = useRouter();
  const { user } = useAuth();
  const { student, refetchStudent } = useStudent();


  // Whether the user has submitted the correct answer:
  // null if no submission yet
  // true if correct answer submitted
  // false if incorrect answer submitted
  const defaultSubmittedCorrectAnswer = student.courseProgress?.course_1?.chapter_3?.section_1?.q_1?.complete;
  const defaultSelectedAnswer = defaultSubmittedCorrectAnswer ? question.correctAnswer : null;
  const [selectedAnswer, setSelectedAnswer] = useState(defaultSelectedAnswer);
  const [submittedCorrectAnswer, setSubmittedCorrectAnswer] = useState(defaultSubmittedCorrectAnswer);

  return (
    <div id={styles.rightCourseColumnContainer}>
      <h1 id={styles.caseStudyTitle}>Case Study: </h1>
      <p id={styles.caseStudyParagraph}>
      Fireside, a seed round funded startup, is looking to raise their next round. Before investing, VC firms are conducting valuation on Fireside’s cash flows to determine their pre-money valuation. These firms are using the weighted average cost of capital(WACC) of 5% as the discount rate. 
      </p>
      <p id={styles.caseStudyParagraph}>
      Fireside’s Cash Flow:
      </p>
      <br></br>
      <div className={styles.imageContainer}>
          <Image className={styles.photo} src={graph} width="300" height="300" alt="Picture of VC Chart" quality={100} />
        </div>

      <br></br>
      <CaseStudyDropdown disabled={submittedCorrectAnswer === true} question={question.question} answers={question.answers} selection={selectedAnswer} onChange={(event) => { setSelectedAnswer(event.target.value) }}></CaseStudyDropdown>

      {
        submittedCorrectAnswer ? (
          <div id={styles.continueButtonContainer}>
            <White_Button button_title="Continue" onClick={() => { router.push("/course_home"); }} /> </div>
        ) : (
          <VStack id={styles.continueButtonContainer}>
            <White_Button button_title="Submit" onClick={() => {
              const isCorrect = selectedAnswer == question.correctAnswer;
              submitAnswer(user.token, "course_1", "chapter_3", "section_1", "q_1", isCorrect).then(() => refetchStudent());
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