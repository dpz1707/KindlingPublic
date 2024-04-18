import React from "react";
import logo from "./fireside_text_logo.png";
import Image from "next/image";
import styles from "./header.module.css";
import { useAuth } from "../../lib/firebase/auth";
import White_Button from "../white_button/white_button";
import Link from "next/link";

function Header() {
  const { user, signIn, signOut } = useAuth();

  return (
    <div id={styles.headerContainer}>
      <Link href="/">
        <Image
          id={styles.headerLogo}
          src={logo}
          placeholder="blur" // Optional blur-up while loading
          alt=""
        />
      </Link>


      <div id={styles.headerRightSide}>
        <a href="http://fireside.bio/">
          <h1 className={styles.headerLink}>Events</h1>
        </a>
        <a href="https://gmail.com/">
          <h1 className={styles.headerLink}>Contact</h1>
        </a>
        <div id={styles.loginButton}>
          {!user ? (
            <White_Button
              button_title="Login"
              id={styles.landing_header_button}
              onClick={() => signIn("/course_home")}
            ></White_Button>
          ) : (
            <White_Button
              button_title="Logout"
              id={styles.landing_header_button}
              onClick={signOut}
            ></White_Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;