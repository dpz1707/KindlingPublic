import React from 'react';
import Image from 'next/image'
import ReactDOM from 'react-dom/client';
import styles from './multipleChoiceButton.module.css';

function MultipleChoiceButton(props) {
  return (
    <button className = {styles.whiteButton} id = {props.button_type} onClick={props.onClick}>{props.button_title}</button>
  );
}

export default MultipleChoiceButton;
 
