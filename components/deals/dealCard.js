import React, { useEffect, useState } from "react";
import Router from "next/router";
import CourseCard from "../courseCard/courseCard";
import { Flex, propNames } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useStudent } from "../../lib/mongodb/studentProvider"
import styles from "./dealform.module.css";
import White_Button from "../white_button/white_button";
import CompanySection from "../companySection/companySection";
import { useAuth } from "../../lib/firebase/auth";
import { Spinner } from "@chakra-ui/react";
import { json } from "react-router";



export const DealCard = (props) => {
    const router = useRouter();

    const { user } = useAuth();

    var words = props.student.name.split(" ");
    var firstLetter = words[0].charAt(0);
    var lastWord = words[words.length - 1];
    var lastLetter = lastWord.charAt(0);
    const studentInitials = firstLetter + lastLetter;

    const [companyName, setCompanyName] = useState(null);
    const [link, setLink] = useState(null);
    const [lookingFor, setLookingFor] = useState(null);
    const [relationship, setRelationship] = useState(null);


    const handleSubmit = async (event) => {
        await fetch("/api/deals/create", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${user.token}`,
                Accept: "application/json",
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                companyName,
                companyLink: link,
                lookingFor,
                relationship
            })

        });
        console.log("submitted");
    }

    console.log(props.deals);
    return (
        <div id={styles.dealFormContainer}>
            <div id={styles.coursesFoldContainer}>
                <div id={styles.coursesFoldContainerLeft}>
                    <div id="studentInitials" className={styles.studentInitials}>{studentInitials}</div>
                    <h1 id={styles.usernameTitle}>{props.student.name}</h1>
                </div>
                <div id={styles.coursesFoldContainerRight}>
                    <h1 id={styles.courseFoldTitle}>Kindling | Deal Profile</h1>
                    <p id={styles.courseFoldParagraph}>
                        Everyone should have the chance to showcase deals.  Whether a founder or student, you know of some awesome startups.  Our goal is to allow individuals to showcase these deals.
                        <br></br>
                        <br></br>
                        <p id={styles.userEmail}> <span style={{ fontWeight: 600 }}>Contact me at:</span> <a href="mailto:${props.student.email}}">{props.student.email}</a></p>
                    </p>
                </div>
            </div>
            <div id={styles.dealsContainer}>
                <div id={styles.dealsContainerCards}>
                    {props.isEditable &&
                        <div id={styles.dealCreator}>
                            <h1 id={styles.dealCreatorTitle}>My Featured Deals</h1>
                            <p id={styles.dealCreatorParagraph}>
                                Everyone should have the chance to showcase deals.  Whether a founder or student, you know of some awesome startups.  Our goal is to allow individuals to showcase these deals.  Create a new deal by filling out the form.
                            </p>
                            <div id={styles.siteLinkContainer}>
                                <form id={styles.formLinkContainer} onSubmit={handleSubmit}>
                                    <input className={styles.inputSection} placeholder="Company Name" value={companyName} onChange={(event) => { setCompanyName(event.target.value) }} />
                                    <input className={styles.inputSection} placeholder="Site URL" value={link} onChange={(event) => { setLink(event.target.value) }} />
                                    <input className={styles.inputSection} placeholder="Desired Investor" value={lookingFor} onChange={(event) => { setLookingFor(event.target.value) }} />
                                    <input className={styles.inputSection} placeholder="Relationship to" value={relationship} onChange={(event) => { setRelationship(event.target.value) }} />
                                    <input id={styles.createDeal} type="submit" value="Create"></input>
                                </form>
                            </div>
                        </div>}

                    {props.deals != null && props.deals.length != 0 ? props.deals.map((deal) => <CompanySection key={deal.companyName} companyName={deal.companyName} link={deal.companyLink} lookingFor={deal.lookingFor} relationship={deal.relationship} />) : <h1>No deals yet!</h1>}
                </div>
            </div>
        </div >
    )
}

export default DealCard;
