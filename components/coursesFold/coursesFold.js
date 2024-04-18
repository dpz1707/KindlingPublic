import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./coursesFold.module.css";
import { useAuth } from "../../lib/firebase/auth";
import { Spinner } from "@chakra-ui/react";
import White_Button from "../white_button/white_button";
import { useRouter } from "next/router";

function CoursesFold() {
  const router = useRouter();
  //This is for client-side user
  const { user } = useAuth();

  //This is for fetching user from server-side using API endpoint
  const [student, setStudent] = useState(null);
  const [studentInitails, setStudentInitials] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch("/api/students/fetch", {
        headers: {
          Authorization: `Bearer ${user.token}`,
          Accept: "application/json",
        },
      });
      const student = await resp.json();
      setStudent(student);
      getFirstAndLastLetters(student.name);
      var words = student.name.split(" ");
      var firstLetter = words[0].charAt(0);
      var lastWord = words[words.length - 1];
      var lastLetter = lastWord.charAt(0);
      setStudentInitials(firstLetter + lastLetter);
    })();
  }, []);
  if (student == null) {
    return <Spinner />;
  }

  function getFirstAndLastLetters(str) {
    var words = str.split(" ");
    var firstLetter = words[0].charAt(0);
    var lastWord = words[words.length - 1];
    var lastLetter = lastWord.charAt(0);
  }

  return (
    <div id={styles.coursesFoldContainer}>
      <div id={styles.coursesFoldContainerLeft}>
        <div id="studentInitials" className={styles.studentInitials}>{studentInitails}</div>
        <h1 id={styles.usernameTitle}>{student.name}</h1>
        <p id={styles.userEmail}>{student.email}</p>
      </div>
      <div id={styles.coursesFoldContainerRight}>
        <h1 id={styles.courseFoldTitle}>My Deal Profile</h1>
        <p id={styles.courseFoldParagraph}>
          Source deals like a VC.  Upload deals to your profile and share them with your network.  We pick the best uploaded deals to show to VCs in our network.  Upload deals and get rewarded.
        </p>
        <div id = {styles.myDeals}>
          <White_Button button_title="View My Profile" onClick={() => router.push(`/deals/${student.uid}`)} />
        </div>
      </div>
    </div>
  );
}

export default CoursesFold;
