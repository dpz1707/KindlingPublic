import React from "react";
import CourseCard from "../courseCard/courseCard";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useStudent } from "../../lib/mongodb/studentProvider"
import styles from "./dealform.module.css";
import White_Button from "../white_button/white_button";
import CompanySection from "../companySection/companySection";


export const DealForm = () => {
    return (
        <div id={styles.dealFormContainer}>
            <div id={styles.coursesFoldContainer}>
                <div id={styles.coursesFoldContainerLeft}>
                    <div id="studentInitials" className={styles.studentInitials}>CN</div>
                    <h1 id={styles.usernameTitle}>Christopher Nakayama</h1>
                </div>
                <div id={styles.coursesFoldContainerRight}>
                    <h1 id={styles.courseFoldTitle}>kindling | Deal Profile</h1>
                    <p id={styles.courseFoldParagraph}>
                        Everyone should have the chance to showcase deals.  Whether a founder or studnet, you know of some awesome startups.  Our goal is to allow individuals to showcase these deals.
                        <br></br>
                        <br></br>
                        <p id={styles.userEmail}> <span style={{fontWeight: 600}}>Contact me using: </span>cnakayama567@gmail.com</p>
                    </p>
                </div>
            </div>
            <div id={styles.dealsContainer}>
                <div id={styles.dealsContainerCards}>
                    <div id={styles.dealCreator}>
                        <h1 id={styles.dealCreatorTitle}>Create a New Deal</h1>
                        <div id={styles.siteLinkContainer}>
                            <form id = {styles.formLinkContainer}>
                                <input className={styles.inputSection} placeholder="Company Name"></input>
                                <input className={styles.inputSection} placeholder="Link"></input>
                                <input className={styles.inputSection} placeholder="Searching"></input>
                                <input className={styles.inputSection} placeholder="Relationship"></input>
                                <input type="submit"></input>
                            </form>
                        </div>
                    </div>
                    <CompanySection companyName="kindling" link="https://firesideapp.vercel.app/" lookingFor="Angel Investor" relationship="My old co-worker"></CompanySection>
                    <CompanySection companyName="kindling" link="https://firesideapp.vercel.app/" lookingFor="Angel Investor" relationship="My old co-worker "></CompanySection>
                </div>
            </div>
            <form onClick={(event) => { console.log("submitted!"); event.preventDefault(); }}>
                {/* Add a hidden field with the lookup_key of your Price */}
                <input type="hidden" name="lookup_key" value="firesidebase" />
                <button id="checkout-and-portal-button" type="submit" >
                    Checkout
                </button>
            </form>
        </div>
    )
}

export default DealForm;
