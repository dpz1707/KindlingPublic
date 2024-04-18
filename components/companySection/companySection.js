import { React, useState, useEffect } from "react";
import styles from "./companySection.module.css";
import White_Button from "../white_button/white_button";
import Image from 'next/image';
import CompanyPhoto from "../companySection/companyPhoto.svg";


function CompanySection(props) {

  return (
    <div id={styles.companySectionContainer}>
      <div id={styles.companySectionContainerLeft}>
        <Image className={styles.companyPhoto} src={CompanyPhoto} width="300" height="300" alt="Picture of VC" quality={100} />
        <h1 id={styles.courseCardTitle}>{props.companyName}</h1>
      </div>
      <div id={styles.companySectionContainerCompanyInfo}>
        <p id={styles.lookingFor}><span style={{ fontWeight: 600 }}>Looking for: </span> {props.lookingFor}</p>
        <p id={styles.relationship}><span style={{ fontWeight: 600 }}>Relationship: </span> {props.relationship}</p>
      </div>
      <div id={styles.siteLinkContainer}>
        <a href={props.link} target="_blank"><White_Button
          button_title="Visit Site"
          onClick={props.onClick}
        ></White_Button>
        </a>
      </div>

    </div>
  );
}

export default CompanySection;