import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Image from "next/image";
import styles from "./how_it_works.module.css";
import How_It_Works_Card from "./how_it_works_card/how_it_works_card";

function How_It_Works(props) {

  function slowFadeInOutOnce(element = document.querySelector(".howItWorksCardContainer")) {
    var duration = 1000; // 1 second
    var interval = 10; // 50 milliseconds
    var steps = duration / interval;
    var step = 1 / steps;
    var opacity = 0;
    var direction = 1;
    var timer = setInterval(function () {
      opacity += direction * step;
      element.style.opacity = opacity;
      if (opacity >= 1) {
        clearInterval(timer);
      }
    }, interval);
  }



  const [card_title, set_card_title] = useState("Venture Capital Education");
  const [card_paragraph, set_card_paragraph] = useState(
    "Our course covers everything from “what is venture capital” to deal structuring and valuation. kindling allows you to learn about VC with no previous knowledge, and practice how well you’ve learned the content."
  );

  function scrollView() {
    const mainRoot = document.getElementById("sponsor_list");
    mainRoot.scrollIntoView({ behavior: "smooth" });
  }

  const card1 = () => {
    set_card_title("Venture Capital Education");
    set_card_paragraph(
      "Our course covers everything from “what is venture capital” to deal structuring and valuation. kindling allows you to learn about VC with no previous knowledge, and practice how well you’ve learned the content."
    );
    scrollView();
    slowFadeInOutOnce()
    document.querySelector("#how_it_works_selector1").style.color = "black";
    document.querySelector("#how_it_works_selector2").style.color = "#838383";
    document.querySelector("#how_it_works_selector3").style.color = "#838383";
    document.querySelector("#how_it_works_selector4").style.color = "#838383";
  };

  const card2 = () => {
    set_card_title("Access Exclusive Events");
    set_card_paragraph(
      "Through weekly speaker events and panels hosted by kindling, you can listen to their stories and ask the difficult questions that haven’t been answered anywhere else."
    );
    scrollView();
    slowFadeInOutOnce()
    document.querySelector("#how_it_works_selector1").style.color = "#838383";
    document.querySelector("#how_it_works_selector2").style.color = "black";
    document.querySelector("#how_it_works_selector3").style.color = "#838383";
    document.querySelector("#how_it_works_selector4").style.color = "#838383";
  };

  const card3 = () => {
    set_card_title("The kindling Community");
    set_card_paragraph(
      "Our community of 150+ students from 30+ universities are all passionate and committed to learning, never passing up the chance to satiate their curiosity for the latest venture news."
    );
    scrollView();
    slowFadeInOutOnce()
    document.querySelector("#how_it_works_selector1").style.color = "#838383";
    document.querySelector("#how_it_works_selector2").style.color = "#838383";
    document.querySelector("#how_it_works_selector3").style.color = "black";
    document.querySelector("#how_it_works_selector4").style.color = "#838383";
  };

  const card4 = () => {
    set_card_title("Gain Industry Connections");
    set_card_paragraph(
      "VC traditionally requires you to know the right people. kindling solves this problem by connections to VC professionals after course milestones are achieved, ensuring your access to mentors who’ve paved their own paths in the VC world."
    );
    scrollView();
    slowFadeInOutOnce()
    document.querySelector("#how_it_works_selector1").style.color = "#838383";
    document.querySelector("#how_it_works_selector2").style.color = "#838383";
    document.querySelector("#how_it_works_selector3").style.color = "#838383";
    document.querySelector("#how_it_works_selector4").style.color = "black";
  };




  return (
    <div id={styles.howItWorksContainer}>
      <div id={styles.howItWorksLeft}>
        <h1 id={styles.howItWorksTitle}>How It Works</h1>
        <p id={styles.howItWorksParagraph}>
          kindling is designed to help you learn the basics of venture capital. If you’re a Founder, Investor, Student, or anywhere in between, learning how to think like a venture capitalist can catapult your success. Through interactive, gamified short-form content with real case studies, you can learn about venture capital anywhere, anytime.

        </p>
        <div
          id={"how_it_works_selector1"}
          className={styles.howItWorksSelector}
          onClick={card1}
        >
          01. Venture Capital Education
        </div>
        <div
          id={"how_it_works_selector2"}
          className={styles.howItWorksSelector}
          onClick={card2}
        >
          02. Access Exclusive Events
        </div>
        <div
          id={"how_it_works_selector3"}
          className={styles.howItWorksSelector}
          onClick={card3}
        >
          03. The kindling Community
        </div>
        <div
          id={"how_it_works_selector4"}
          className={styles.howItWorksSelector}
          onClick={card4}
        >
          04. Gain Industry Connections
        </div>
      </div>
      <div id={styles.howItWorksRight}>
        <How_It_Works_Card
          title={card_title}
          paragraph={card_paragraph}
          id={styles.howItWorksCard}
        ></How_It_Works_Card>
      </div>
    </div>
  );
}

export default How_It_Works;