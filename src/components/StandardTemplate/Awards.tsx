"use client"
import React from 'react'
import styles from "./StandardTemplate.module.css";
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Awards({data}:any) {
    const flipInVariants = {
        hidden: { rotateY: -90, opacity: 0 },
        visible: { rotateY: 0, opacity: 1 }
      };
      
      const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
      });
      
    const itemTemplate = (award :any) => {
        return (
            <Card className={styles.educationCard} title={award.name} subTitle={`Year: ${award.year}`} style={{ width: '300px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <i className="pi pi-star-fill" style={{ fontSize: '2rem', margin: '0.8rem', color:"#512E5F" }}></i>
            <i className="pi pi-star-fill" style={{ fontSize: '2rem', margin: '0.8rem', color:"#512E5F" }}></i>
            <i className="pi pi-star-fill" style={{ fontSize: '2rem', margin: '0.8rem', color:"#512E5F" }}></i>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            </div>
            <p>{award.description}</p>
          </Card>
        );
      };
  return (
    <>
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={flipInVariants}
      transition={{ duration: 1, ease: "easeOut" }}
    >
    <div className={styles.subHeadings}>I have won Glory for!</div>
    <Carousel value={data.Award} itemTemplate={itemTemplate} numVisible={3} numScroll={1} />;
    </motion.div>
    </>
  )
}

export default Awards