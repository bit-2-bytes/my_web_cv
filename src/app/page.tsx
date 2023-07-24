"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import React, { useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function Home() {
  const router = useRouter();

  function openResumeCreator() {
    router.push("/CVCreator/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.dots}>
          <div className={styles.dot1}></div>
          <div className={styles.dot2}></div>
          <div className={styles.dot3}></div>
        </div>
        <div className={styles.innerContents}>
        <h1 className={styles.heading}>Portfolion</h1>
          <div className={styles.appContents}>
            <h1 className={styles.appHeading}>Portfolion</h1>
        <p className={styles.paragraph}>
          A no code Web based portfolio creator for all professionals and
          graduates. 
        </p>
        <button className={styles.button} onClick={openResumeCreator}>Create My Portfolio/CV</button>
        
        </div>
        <Player
          autoplay
          loop
          src="./assets/resume_animated_lottie.json"
          className={styles.lottiePlayer}
        >
        </Player>
        </div>
        <p className={styles.creditsSection}>Made with  ❤️ by Ajai S S, Abhishek Kumar and Shivam Saini</p>
      </div>
    </div>
  );
}
