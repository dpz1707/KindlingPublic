import { React, useState, useEffect } from "react";
import styles from "./courseCard.module.css";
import White_Button from "../white_button/white_button";

function courseCard(props) {

  const [bulletPoints, setBulletPoints] = useState(props.cardParagraph);

  useEffect(() => { 
    setBulletPoints(props.cardParagraph);
  }, []);

  return (
    <div id={styles.courseCardContainer}>
      <div>
        <h1 id={styles.courseCardTitle}>{props.cardTitle}</h1>
        <p id={styles.courseCardParagraph}><li className="bulletPoint">{props.pointOne}</li><li className="bulletPoint">{props.pointTwo}</li><li className="bulletPoint">{props.pointThree}</li></p>
      </div>
      <div id={styles.courseCardBottom}>
        <br />
        <h1 id={styles.courseCardProgress}>
          {props.sectionsCompleted}/{props.sectionsTotal}
        </h1>
        <White_Button
          button_title="Enter Section"
          onClick={props.onClick}
        ></White_Button>
      </div>
    </div>
  );
}

export default courseCard;