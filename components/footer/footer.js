import React from 'react';
import Image from 'next/image'
import ReactDOM from 'react-dom/client';
import logo from './fireside_text_logo.png'
import styles from './footer.module.css';
import White_Button from '../white_button/white_button';

function Footer() {
  return (
    <div id={styles.footerContainer}>
      <a href="https://www.linkedin.com/company/firesidefellows" target="_blank"><span className={styles.footerLink}>LinkedIn</span></a>
      <a href="https://www.instagram.com/fireside.bio/" target="_blank"><span className={styles.footerLink}>Instagram</span></a>
      <a href="https://twitter.com/FiresideBio" target="_blank"><span className={styles.footerLink}>Twitter</span></a>
    </div>
  );
}

export default Footer;