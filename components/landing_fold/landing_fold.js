import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './landing_fold.module.css';
import Image from 'next/image'
import ComputerScreen from './computer_screen.png'
import White_Button from '../white_button/white_button';
import { useAuth } from "../../lib/firebase/auth";

function Landing_Fold(props) {
  const { user, signIn, signOut } = useAuth();
  function scrollView() {
    const mainRoot = document.getElementById("sponsor_list");
    mainRoot.scrollIntoView({ behavior: "smooth" });
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

        
            <White_Button
              button_title="Sign Up"
              id={styles.landing_header_button}
              onClick={() => signIn("/course_home")}
            ></White_Button>
          
          <div className={styles.divider} />
          <White_Button onClick={scrollView} id={styles.howItWorks} button_type="landingFold" button_title="How it Works"></White_Button>
        </div>
        <p id={styles.landingFoldParagraph}>Whether you&apos;re a student, professional, or founder, kindling is the all-in one platform for cracking VC.  We provide resources for education, community, and making connection for the venture capital industry.</p>
      </div>
      <Image
        className={styles.computerScreen}
        src={ComputerScreen}
        placeholder="blur" // Optional blur-up while loading
        alt=""
      />
    </div>
  );
}

export default Landing_Fold;