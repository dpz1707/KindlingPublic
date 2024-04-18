import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './community_section_blurb.module.css';
import White_Button from '../../white_button/white_button';

function Community_Section_Blurb(props) {
  return (
    <div className={styles.communitySectionBlurbContainer}>
      <h1>{props.title}</h1>
      <p>
        {props.paragraph}
      </p>
      <a href={props.link} target="_blank"><White_Button button_type={props.button_type} button_title={props.button_title}></White_Button></a>
    </div>
  );
}

export default Community_Section_Blurb;