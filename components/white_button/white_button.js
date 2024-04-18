import { color } from "framer-motion";
import React from "react";
import styles from "./white_button.module.css";

function White_Button(props) {


  return (
    <button
      className={styles.whiteButton}
      onClick={props.onClick}
    >
      {props.button_title}
    </button>
  );
}

export default White_Button;
