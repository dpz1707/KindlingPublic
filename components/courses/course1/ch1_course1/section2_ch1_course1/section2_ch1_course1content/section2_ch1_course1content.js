import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import styles from '././section2_ch1_course1content.module.css';
import CourseDefinitionSection from '../../../../../courseContentComponents/courseDefinitionSection/courseDefinitionSection';
import CourseBulletSection from '../../../../../courseContentComponents/courseBulletSection/courseBulletSection';
import CourseContentDefinition from '../../../../../courseContentDefinition/courseContentDefinition';
import startupEcosystem from './startupEcosystem.svg';
import Image from 'next/image';


function MiddleCourseColumn(props) {

  return (
    <div id={styles.middleCourseColumnContainer}>
      <h1 id={styles.courseContentTitle}>1.2: What is a Venture Capital Firm?</h1>
      <p id={styles.caseStudyParagraph}>
        Venture capital firms are investment firms that fund and mentor startups. These firms frequently have a “niche” — Sequoia Capital invests largely in technology, while other firms may focus on consumer or gaming startups(for ex.). This allows the firm to specialize, and gather employees who’s expertise is on the “niche.”        </p>
      <br></br>
      <CourseDefinitionSection definition="Some of the biggest firms in VC: Bain Capital, Tiger Global, GGC Capital, Redpoint Ventures"></CourseDefinitionSection>
      <br></br>
      <p id={styles.caseStudyParagraph}>
        Venture Capital Firms begin when individuals find outside investors and convince them to put money in the firm. This money goes into a venture fund, and along with some money from the VC firm, the fund manages this money by investing in startups(or other early-stage investments). </p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
        These outside investors are known as <CourseContentDefinition term="Limited Partners(LPs) " definition="The investor that supplies the capital. Can be individuals or entities, especially high net worth individuals or pension funds." />  and enter a <CourseContentDefinition term="Limited Partnership Agreement(LPA)" definition="The investor that supplies the capital. Can be individuals or entities, especially high net worth individuals or pension funds." />  with the venture firm’s General Partners(GPs). GPs are the employees of the VC firm who manage the venture fund, decide who to invest in, and try to make the fund highly profitable. LP’s make money(called dividends) when the fund makes money, and when the VC sells their equity in the startup(s).  </p>
      <br></br>
      <div className={styles.imageContainer}>
        <Image className={styles.photo} src={startupEcosystem} width="300" height="300" alt="Picture of VC" quality={100} />
      </div>
      <br></br>
      <p id={styles.caseStudyParagraph}>
        Now you might be wondering, how do GPs make money? There are two main ways:  </p>
      <br></br>

      <CourseBulletSection termDefinition="Management Fees: the “salaries” are compensation for organizing and managing the fund. Typically fixed to 2% of the value of the venture fund." />
      <CourseBulletSection termDefinition="Carried Interest: the “bonus” is the portion of the profits from the venture fund that the GPs get. Typically fixed to 20% of the profits." />
      <br></br>
      <p id={styles.caseStudyParagraph}>
        These fixed rates are known as the <CourseContentDefinition term="2 and 20" definition="The standard fee structure that VC firms charge investors. Annually, management fees are 2% while carried interest is 20%." />.  Dependent on the number of GPs, they split the management fees and carried interest. </p>
    </div>
  );
}

export default MiddleCourseColumn;