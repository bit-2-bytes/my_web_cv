"use client"
import React from 'react'
import styles from "./StandardTemplate.module.css";
import { Timeline } from 'primereact/timeline';
import { Fieldset } from 'primereact/fieldset';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ProffesionalExperience({ data }: any) {
  const bounceAndSlideVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100
      }
    }
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
    const renderItem = (item:any) => {
        return (
         <Fieldset legend={item.role+"-"+item.organisation} className={styles.educationCard}>
            <legend className={styles.educationYear}>{item.year}</legend>
            {/* {item["project details"].map((project:any,index:number)=>(
                <li key={index}>{project}</li>
            ))} */}
         </Fieldset>
        );
      };
  return (
    <>
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={bounceAndSlideVariants}
      transition={{ duration: 1, ease: "easeOut" }}
    >
    <div className={styles.subHeadings}>Over the years I have been working as!</div>
    <Timeline value={data["Professional Experience"]} align="alternate" content={(item) => renderItem(item)} />
    </motion.div>
    </>
  )
}

export default ProffesionalExperience