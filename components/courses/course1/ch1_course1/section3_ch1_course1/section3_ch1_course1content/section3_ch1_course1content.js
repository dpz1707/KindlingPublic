import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Image from 'next/image'
import capital from "./Group6.svg";
import styles from './section3_ch1_course1content.module.css';
import CourseDefinitionSection from '../../../../../courseContentComponents/courseDefinitionSection/courseDefinitionSection';
import CourseBulletSection from '../../../../../courseContentComponents/courseBulletSection/courseBulletSection';
import CourseContentDefinition from '../../../../../courseContentDefinition/courseContentDefinition';

function MiddleCourseColumn(props) {

  return (
    <div id={styles.middleCourseColumnContainer}>
      <h1 id={styles.courseContentTitle}>1.3: The Role of Venture Capital in the Startup Ecosystem</h1>
      <p id={styles.caseStudyParagraph}>
        Now that you know what VC is, you may be curious about how they fit into the  <CourseContentDefinition term="startup ecosystem" definition="The people, startups/companies, and related organizations involved in the creation of startups and their growth." />
        .   </p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
        Venture Capital serves as both funding organizations and support organizations to startups and their founding team. </p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
        By providing funding, VCs allow startups to turn their ideas into reality: with the capital invested by VCs, founders can choose to spend that money on <CourseContentDefinition term="prototyping" definition="The formation of the product/service that was previously only an idea. Prototypes can come in many forms, with some being fully functional and others not. " />, 
        hiring a larger team, or any action that they believe will help grow their startup.   </p>
      <br></br>
      <div className={styles.imageContainer}>
        <Image className={styles.photo} src={capital} width="300" height="300" alt="Picture of VC" quality={100} />
      </div>
      <br></br>

      <p id={styles.caseStudyParagraph}>
        By providing support, VCs give founders a place to bounce ideas off experienced folks who’ve gone through the process of founding a startup before or have expertise in the startup’s industry. Along with this mentorship, VC firms provide 
        extensive  <CourseContentDefinition term="networks" definition="The group of people you know or have connections to. " />, 
        which the startup can utilize to gain access to customers, suppliers, and other resources. Venture capital and the startup ecosystem are games of relationships: knowing the right people at the right time can make or break the deal, the idea, the entire startup.   </p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
        Gaining funding from 
        reputable <CourseContentDefinition term="venture capitalists" definition="The investors employed at VC firms who are deciding what to invest in, how much to invest, and what occurs after that investment. " />  validates 
        the value and potential of the startup’s idea and business model, as venture capitalists go through an extensive process 
        of <CourseContentDefinition term="due diligence" definition="The research & examination process that investors go through to decide if a startup is worth investing in. " />  to 
        determine if they should make an investment in the startup.    </p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
        In the dynamic, constantly-shifting world of venture capital, staying informed is key to breaking into VC. You might be asked in interviews to discuss industry-specific events, past investments made by the VC, or even just a news event you found interesting. Try your best to stay informed on the latest trends, and after discovering a specific “niche” of interest, hone in on articles about developments in the market.    </p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
        Staying informed requires dedication, but can be made easier by subscribing to newsletters that go straight to your inbox in the morning, finding news sources that are unbiased and industry-relevant, or having a community with VC interests.     </p>
      <br></br>
    </div>
  );
}

export default MiddleCourseColumn;