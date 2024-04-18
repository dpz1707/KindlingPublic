import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './landing_fold.module.css';
import Image from 'next/image'
import ComputerScreen from './computer_screen.png'
import White_Button from '../white_button/white_button';

function Landing_Fold(props) {
  function scrollView() {
    alert("asdf")
  }

  return (
    <div id={styles.landingFoldContainer}>
      <div id={styles.landingFoldLeft}>
        <h1 id={styles.landingTitleText}>
          <span style={{ fontWeight: 800 }}>Uncover</span> the world
          <br></br> of <span style={{ fontWeight: 800 }}>Venture Capital</span>
          <span id={styles.titleSubtext}>*while still having fun</span>
        </h1>
        <div id={styles.landingFoldButtons}>
          <White_Button id={styles.signupButton} button_type={styles.landingFold} button_title="Sign Up"></White_Button>
          <div className={styles.divider} />
          <White_Button id={styles.howItWorks} button_type={styles.landingFold} button_title="How it Works"></White_Button>
        </div>
        <p id={styles.landingFoldParagraph}>This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. </p>
      </div >
      <Image
        className={styles.computerScreen}
        src={ComputerScreen}
        placeholder="blur" // Optional blur-up while loading
      />
    </div >
  );
}

export default Landing_Fold;