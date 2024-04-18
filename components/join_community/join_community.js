import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './join_community.module.css';
import Community_Section_Blurb from './community_section_blurb/community_section_blurb'
import Image from 'next/image'
import Fireside from './fireside.png'

function Join_Community(props) {
  return (
    <div id={styles.joinCommunityContainer}>
      <div id={styles.communityFlexContainer}>
        <h1 id={styles.communityTitle}>Join the Community</h1>
        <div id={styles.commmunityStatsContainer}>
          <p className={styles.communityStats}>Enrolled Students: <span className={styles.communityStatsMetric}>150+</span></p>
          <p className={styles.communityStats}>Universities Globally: <span className={styles.communityStatsMetric}>20+</span></p>
        </div>
        <div id={styles.communityBlurbContainer}>
          <Image
            className={styles.communitySectionBlurbContainer}
            src={Fireside}
            id={styles.firesideCommunityPhoto}
            placeholder="blur" // Optional blur-up while loading
            alt=""
          />
          <Community_Section_Blurb link="http://fireside.bio/" button_title="Apply Now" title="Fireside Fellows" paragraph="Join the kindling Fellowship.  This program provides fellows with access to VC education resources, a vibrant community, and access to exclusive speaker events with professionals in the industry."></Community_Section_Blurb>
          <Community_Section_Blurb link="https://join.slack.com/t/fireside-fel2319/shared_invite/zt-1qz4iva44-r~gp4~2s1exCS1wK6_JV3Q" button_title="Join the Slack" title="Our Community" paragraph="Connect with the kindling community by joining our Slack.  Chat with professional and community members, stay up to date with tech news, get invited to kindling speaker events, and gain access VC opportunities."></Community_Section_Blurb>
          <Community_Section_Blurb link="mailto:firesidebio@gmail.com" button_title="Contact Us" title="Let's Collaborate" paragraph="At its core, kindling is a community of passionate individuals with the goal of learning about VC.  We love to collobrate with others in the tech and VC community.  Let's connect!"></Community_Section_Blurb>
        </div>
      </div>
    </div >
  );
}

export default Join_Community;