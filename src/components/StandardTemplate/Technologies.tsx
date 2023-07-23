"use client";
import React from "react";
import styles from "./StandardTemplate.module.css";
import { Chip } from "primereact/chip";
import Image from "next/image";
function Technologies({ data }: any) {


  const colors = [
    '#6C3483', // Royal Purple
    '#512E5F', // Dark Purple
    '#76448A', // Rich Purple
    '#4A235A', // Deep Purple
    '#1F618D', // Midnight Blue
    '#2874A6', // Dark Blue
    '#1B4F72', // Sapphire Blue
    '#154360', // Royal Blue
    '#148F77', // Ocean Green
    '#117864', // Dark Teal Green
  ];

  const getRandomColor = (index:number) => {
    return colors[index];
  };

  return (
    <>
      <div className={styles.subHeadings}>
        Here is what I have learnt over the years!
      </div>
      <Image
        src=".././assets/technologies.svg"
        width={500}
        height={500}
        alt="Technologies svg"
      />
      <div className={styles.technologiesContainer}>
        {data.Technologies.map((tech: any, index: any) => (
          <Chip
            key={index}
            className={styles.technologiesChip}
            label={tech}
            style={{
              fontWeight: "bold",
              color: "white",
              backgroundColor: getRandomColor(index),
            }}
          ></Chip>
        ))}
      </div>
    </>
  );
}

export default Technologies;
