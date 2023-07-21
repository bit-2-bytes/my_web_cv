import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import styles from "./StandardTemplate.module.css";

function Home({ data }: any) {
  return (
    <>
    <div className={styles.authorIntroduction}>Hi 👋 I &apos; m {data.personalDetails.username},</div>
    <TypeAnimation
    sequence={[
      `Im a ${data.personalDetails.adjectives[0]}`, 
      1000, 
      `Im a ${data.personalDetails.adjectives[1]}`, 
      2000, 
      `Im a ${data.personalDetails.adjectives[2]}`, 
      3000,
    ]}
    wrapper="span"
    cursor={true}
    repeat={Infinity}
  />
  <img src={data.personalDetails.photo} className={styles.photo}/>
  </>
  )
}

export default Home