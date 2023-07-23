import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
import styles from "./StandardTemplate.module.css";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Home({ data }: any) {

  const scaleUpVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  return (
    <>
    <div className={styles.authorIntroduction}>Hi 👋 I&apos;m <span className={styles.authorName}>{data.personalDetails.username}</span>,</div>
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
   <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={scaleUpVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
  <Image src={data.personalDetails.photo} className={styles.photo} width={500}
      height={500} alt="User Photo"/>
      </motion.div>
  </>
  )
}

export default Home