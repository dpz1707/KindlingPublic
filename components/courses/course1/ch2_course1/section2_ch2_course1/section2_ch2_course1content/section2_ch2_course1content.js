import React from 'react';
import styles from './section2_ch2_course1content.module.css';
import Image from 'next/image';
import graph from "./Group9.svg";
import CourseDefinitionSection from '../../../../../courseContentComponents/courseDefinitionSection/courseDefinitionSection';
import CourseBulletSection from '../../../../../courseContentComponents/courseBulletSection/courseBulletSection';
//       <CourseDefinitionSection definition="Some of the biggest firms in VC: Bain Capital, Tiger Global, GGC Capital, Redpoint Ventures"></CourseDefinitionSection>
//       <CourseBulletSection termDefinition="Carried Interest: the “bonus” is the portion of the profits from the venture fund that the GPs get. Typically fixed to 20% of the profits." />
//portfolio companies

function MiddleCourseColumn(props) {
  return (
    <div id={styles.middleCourseColumnContainer}>
      <h1 id={styles.courseContentTitle}>2.2: Rounds of Financing </h1>
      <p id={styles.caseStudyParagraph}>
      Although many startups are bootstrapped or are supported by friends and family, that money can run out pretty quickly. Especially as the startup grows in customer base and operations, achieving the next goal may require more money than they can support with their own funds. This leads to startups completing fundraising rounds where investors invest money into a growing company in exchange for equity.         </p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
      Before any funding round, analysts conduct a valuation of the startup. This valuation takes into account management, market size, existing revenue, risk, and many other factors.  </p>
      <br />
      <p id={styles.caseStudyParagraph}>
      These fundraising rounds are split depending on maturity and growth potential of the company: </p>
      <br></br>

      <div className={styles.imageContainer}>
        <Image className={styles.photo} src={graph} width="300" height="300" alt="Picture of VC Chart" quality={100} />
      </div>
      <br></br>

      <p id={styles.caseStudyParagraph} ><b>
      Pre-Seed Funding:</b> </p>
      
      <p id={styles.caseStudyParagraph}>
      The earliest stage, where the company’s founders are just getting their operations off the ground. The typical exchange of cash for equity is unlikely, as the investors in a pre-seed funding situation are the founders themselves. 
      </p>
      
      <CourseBulletSection termDefinition="Investors: The Founders, close friends, family. " />
      <br></br>

      <p id={styles.caseStudyParagraph} ><b>
      Seed Funding:</b> </p>
      
      <p id={styles.caseStudyParagraph}>
      First official equity funding stage, where the “seed” for the future “tree” is planted in the form of cash from investors. Seed funding helps companies finance its initial development, market research, or finalize their product.  
      </p>
      
      <CourseBulletSection termDefinition="Investors: Angel investors, VC firms, startup accelerators" />
      <br></br>

      <p id={styles.caseStudyParagraph} ><b>
      Series A Funding:</b> </p>
      
      <p id={styles.caseStudyParagraph}>
      With a valuation of up to $24 million, startups raising a Series A will already have traction and a strong strategy for making profits. This funding will go towards developments that make long-term profits for the startup and the investors. The investors in this round have the important role of having more influence in the startup. Frequently, one investor will become an “anchor” who plays a key role in attracting other investors.   
      </p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
      As part of the Series A Round, startups have increasingly used equity crowdfunding, due to difficulties in attracting institutional investors like VC firms. 
      </p>
      
      <CourseBulletSection termDefinition="Investors: VC Firms & Corporate VC Arms(CVC)" />
      <br></br>


      <p id={styles.caseStudyParagraph} ><b>
      Series B Funding: </b> </p>
      
      <p id={styles.caseStudyParagraph}>
      Valued between $30-60 million, these companies are well-established, with proven ways to generate revenue. The key anchor investor remains important, especially as new waves of investors begin looking to invest.       </p>
      
      
      <CourseBulletSection termDefinition="Investors: VC & CVC Firms, PE Firms" />
      <br></br>

      <p id={styles.caseStudyParagraph} ><b>
      Series C Funding:</b> </p>
      
      <p id={styles.caseStudyParagraph}>
      Typically valued between $50-200 million, the company raising a Series C have a track record of success, with a large customer base & well-established business model. With Series C funding, these companies are likely seeking to expand into new markets, develop new products, acquire other companies, or boost valuations just before an IPO.       </p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
      An initial public offering would allow the company to raise significant capital by offering their shares on the public market, where retail investors like you can buy shares on Robinhood, Fidelity, or your trading platform of choice.       </p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
      Most companies end their external equity funding with Series C, but some even go on to Series D and Series E to support further growth and expansion. </p>      
      <CourseBulletSection termDefinition="Investors: VC Firms, PE Firms, and other institutional investors. " />
      <br></br>
      <p id={styles.caseStudyParagraph}>
      Not every startup will begin at the Pre-Seed round and go through Series E Funding, as each will decide they need external cash or IPO and exit the funding process at different times. 
      </p>
      <br></br>
      

      
      <br /><br /><br />
    </div>
  );
}

//<Image className={styles.photo} src={capital} width="300" height="300" alt="Picture of VC" quality={100} />
export default MiddleCourseColumn;