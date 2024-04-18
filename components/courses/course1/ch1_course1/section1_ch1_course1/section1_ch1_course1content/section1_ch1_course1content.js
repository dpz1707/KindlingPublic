import React from 'react';
import styles from './section1_ch1_course1content.module.css';
import Image from 'next/image';
import capital from "./capital.svg";
import CourseContentDefinition from '../../../../../courseContentDefinition/courseContentDefinition';


function MiddleCourseColumn(props) {
  return (
    <div id={styles.middleCourseColumnContainer}>
      <h1 id={styles.courseContentTitle}>1.1: Introduction to Venture Capital </h1>
      <p id={styles.caseStudyParagraph}>
        Venture Capital, or VC, is a form of financing where capital is invested in a <CourseContentDefinition term="company" definition="Company: in VC, this company is usually a startup or small business." /> in return for <CourseContentDefinition term="equity" definition="Equity: ownership of the company" /> in the company.</p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
        Venture capital firms invest in <CourseContentDefinition term="early stage startups" definition="Early stage startups: A new company that offers a new product or service. Startups are associated with innovative, fast-paced environments. They hope to grow, gain more customers, and become an established company. Early stage startups are especially focused on product development and building a customer base. " />  that have yet to turn a significant profit, but with much higher potential for growth in size and revenue compared to startups in other stages of development. These firms are investing in the founder’s idea, not necessarily existing traction or profit. These startups are private companies, which are owned by one or a small number of owners.</p>
      <br></br>
      <div className={styles.imageContainer}>
        <Image className={styles.photo} src={capital} width="300" height="300" alt="Picture of VC" quality={100} />
      </div>
      <br></br>
      <p id={styles.caseStudyParagraph}>
        Venture investors don’t have a crystal ball that tells them which startups will become the next Google, but if they guess right, these <CourseContentDefinition term="unicorn startups" definition="Unicorn startup: An elusive startup that is valued at $1 billion or more, and is regarded as incredibly successful. VC firms " /> can return 100x the initial investment. </p>
      <br></br>
    </div>
  );
}

export default MiddleCourseColumn;