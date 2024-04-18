import React from 'react';
import styles from './section1_ch2_course1content.module.css';
import Image from 'next/image';
import graph from "./chart.svg";
import CourseDefinitionSection from '../../../../../courseContentComponents/courseDefinitionSection/courseDefinitionSection';
import CourseBulletSection from '../../../../../courseContentComponents/courseBulletSection/courseBulletSection';
//       <CourseDefinitionSection definition="Some of the biggest firms in VC: Bain Capital, Tiger Global, GGC Capital, Redpoint Ventures"></CourseDefinitionSection>
//       <CourseBulletSection termDefinition="Carried Interest: the “bonus” is the portion of the profits from the venture fund that the GPs get. Typically fixed to 20% of the profits." />
//portfolio companies

function MiddleCourseColumn(props) {
  return (
    <div id={styles.middleCourseColumnContainer}>
      <h1 id={styles.courseContentTitle}>2.1: The Deal Flow Process </h1>
      <p id={styles.caseStudyParagraph}>
        The VC Firm typically goes through a 5 step process to actually invest in a startup. Each firm’s deal flow process will differ from the next, but each of the following steps are carried out in some manner.        </p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
        A faster deal flow process means a higher rate of incoming deals, which can signal how much investors and startup founders value the VC firm. </p>
      <br />
      <CourseBulletSection termDefinition="Sourcing: Sourcing marks the origin of a relationship between the startup and the VC, where both sides meet & want to learn more about the other. " />
      <p id={styles.caseStudyParagraph}>
        There is no “right” way to do this: some firms host events, attend conferences, or draw from their personal networks, while others utilize third-party data providers to find the startups they want to invest in. </p>

      <CourseBulletSection termDefinition="Screening: The VC firm and the startup meet more formally to discuss the specifics of the startup, and how they could fit into the VCs companies. " />
      <p id={styles.caseStudyParagraph}>
        At this point in the process, a “lead” is selected within the VC firm who becomes the designated expert on this particular startup. Partners of the firm may meet to discuss the advantages of investing in the startup. </p>

      <CourseBulletSection termDefinition="Due Diligence: The VC firm - especially the lead -will analyze, research, and evaluate the startup based on financial information, industry conditions, their current portfolio companies, and much more.  " />
      <p id={styles.caseStudyParagraph}>
        Along with the financials, the due diligence process can include competitive analysis, product differentiation, management capability, and a long-term vision.  </p>

      <CourseBulletSection termDefinition="Negotiation: After conducting due diligence and being satisfied with what they find, the VC firm will negotiate a term sheet with the startup.  " />
      <p id={styles.caseStudyParagraph}>
        The term sheet is the “blueprint” for the investment, showing the demands of the VC firm and how much they will invest. Although not legally binding, there are norms and expectations from both ends to hold up on the agreement.  </p>

      <CourseBulletSection termDefinition="Closing: The term sheet is signed, legalities are sorted through, the capital call occurs, and the funds are transferred to the startup. " />
      <p id={styles.caseStudyParagraph}>
        After closing, each VC firm has their own way of managing relationships with their portfolio companies. Some are hands-off, while others prefer to be more involved.    </p>

      <br></br>
      <div className={styles.imageContainer}>
        <Image className={styles.photo} src={graph} width="300" height="300" alt="Picture of VC Chart" quality={100} />
      </div>

      
      <br /><br /><br />
    </div>
  );
}

//<Image className={styles.photo} src={capital} width="300" height="300" alt="Picture of VC" quality={100} />
export default MiddleCourseColumn;