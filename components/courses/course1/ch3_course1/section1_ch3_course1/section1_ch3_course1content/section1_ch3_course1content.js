import React from 'react';
import styles from './section1_ch3_course1content.module.css';
import Image from 'next/image';
import graph from "./VCEquation.svg";
import CourseDefinitionSection from '../../../../../courseContentComponents/courseDefinitionSection/courseDefinitionSection';
import CourseBulletSection from '../../../../../courseContentComponents/courseBulletSection/courseBulletSection';
//<CourseDefinitionSection definition="Some of the biggest firms in VC: Bain Capital, Tiger Global, GGC Capital, Redpoint Ventures"></CourseDefinitionSection>

function MiddleCourseColumn(props) {
  return (
    <div id={styles.middleCourseColumnContainer}>
      <h1 id={styles.courseContentTitle}>3.1: Startup Valuation  </h1>
      <p id={styles.caseStudyParagraph}>
      VC firms conduct valuation to assign a value to the “worth” of a startup. There are 8 main methods that allow the firm to determine the total value of current assets, future growth potential, and qualitative factors such as the team’s expertise or market opportunity. This valuation also accounts for extrinsic factors, such as market environment or industry instability. </p>
      <br></br>
      <p id={styles.caseStudyParagraph}>
      Important to understand is the difference between pre-money valuation and post-money valuation. Pre-money valuation is the value of a company before the funding round, whereas post-money valuation is the value of the company after the funding round with fresh capital from investors, such as VC firms. The higher the pre-money valuation, the lower ownership percentage investors will have for a given amount of investment.
      </p>
      <br></br>

      <CourseDefinitionSection definition="Ex: A company’s pre-money valuation is $10 million, and it raises $5 million in a Series A funding round. The post-money valuation would be $15 million. "></CourseDefinitionSection>
      <br></br>

      <p id={styles.caseStudyParagraph} ><b>
      Methods of Valuation: </b> </p>

      <p id={styles.caseStudyParagraph}>
        Methods of Valuation:  </p>
      <br />
      <p id={styles.caseStudyParagraph}>
        1. For Pre-Revenue Startups  </p>
      <br />
      <CourseBulletSection termDefinition="The Berkus Method: Assign dollar amount to five key success metrics of early-stage startups, with a maximum addition to company value of $500,000 per metric(capping pre-revenue valuation at $2M). Straightforward, but doesn’t consider market factors. The five key metrics: "/>
      <CourseDefinitionSection definition="Sound Idea - basic value"></CourseDefinitionSection>
      <CourseDefinitionSection definition="Prototype - reducing technology risk"></CourseDefinitionSection>
      <CourseDefinitionSection definition="Quality Management Team - reducing execution risk"></CourseDefinitionSection>
      <CourseDefinitionSection definition="Strategic Relationship - reducing market risk"></CourseDefinitionSection>
      <CourseDefinitionSection definition="Product Rollout or Sales - reducing production risk"></CourseDefinitionSection>

      <CourseBulletSection termDefinition="Scorecard Valuation Method: Compare the startup to other similar startups that are already funded " />
      <CourseDefinitionSection definition="Stage of development"></CourseDefinitionSection>
      <CourseDefinitionSection definition="Business Sector"></CourseDefinitionSection>
      <CourseDefinitionSection definition="Geographic Location"></CourseDefinitionSection>


      <CourseBulletSection termDefinition="Venture Capital Method: reflects the process of investors, where the firm attempts to estimate the potential exit value " />
      <CourseDefinitionSection definition="Estimate the Investment Needed"></CourseDefinitionSection>
      <CourseDefinitionSection definition="Forecast Startup Financials"></CourseDefinitionSection>
      <CourseDefinitionSection definition="Determine the Timing of Exit"></CourseDefinitionSection>
      <CourseDefinitionSection definition="Calculate Multiple at Exit"></CourseDefinitionSection>
      <CourseDefinitionSection definition="Discount to Present Value at the Desired Rate of Return"></CourseDefinitionSection>
      <CourseDefinitionSection definition="Determine Valuation and Desired Ownership Stake"></CourseDefinitionSection>

      <br />

      <p id={styles.caseStudyParagraph}>
        2. Built on Precedents  </p>

      <CourseBulletSection termDefinition="Comparable Transactions Method: similar to the scorecard valuation method, VC firms compare the startup being valued to other funded startups. However, here the firm needs to factor in ratios or multipliers for anything different between the compared startups.  " />

      <br />

      <p id={styles.caseStudyParagraph}>
        3. Works for Most Startups </p>
      <CourseBulletSection termDefinition="Discounted Cash Flow Method: Take free cash flows generated in the future by the startup and discount them to derive the value of the startup today    " />
      <CourseDefinitionSection definition="Discounted Cash Flow(DCF) Method: Project the startup’s future free cash flow"></CourseDefinitionSection>
      <br></br>

      <CourseBulletSection termDefinition="Calculating" />
      <CourseDefinitionSection definition="Estimate the discount rate, or the rate of return on investment(typically high)"></CourseDefinitionSection>
      <CourseDefinitionSection definition="Discount the future free cash flows to present value "></CourseDefinitionSection>


      <CourseBulletSection termDefinition="Cost-to-Duplicate: the sum of all costs and expenses associated with the startup and development of its product/service " />
      <br></br>
      
      <p id={styles.caseStudyParagraph}>
        The formula: </p>
        <br></br>

        <div className={styles.imageContainer}>
          <Image className={styles.photo} src={graph} width="300" height="300" alt="Picture of VC Chart" quality={100} />
        </div>

      


      <br /><br /><br />
    </div>
  );
}

export default MiddleCourseColumn;