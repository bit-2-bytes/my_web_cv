"use client"
import React from 'react'
import styles from "./StandardTemplate.module.css";
import { Fieldset } from 'primereact/fieldset';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Education({ data }: any) {
  const fadeScaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
    
  return (
    <>
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeScaleVariants}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
    <div className={styles.subHeadings}>My Educational Summary</div>
    <div className={styles.educationContainer}>
    {data.Education.map((course: any, index: any)=>(
        <Fieldset key={index} legend={course.degree+"-"+course.specialisation } className={styles.educationCard} > 
        <legend className={styles.educationYear}>{course.institution+ "("+course.year+")"}</legend> 
        {course.achievements.map((achievement: any, index: any)=>(
            <li key={index}>{achievement}</li>
        ))}
        </Fieldset>
    ))}
    </div>
    </motion.div>
    </>
  )
}

export default Education