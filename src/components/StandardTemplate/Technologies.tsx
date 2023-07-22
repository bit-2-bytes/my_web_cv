import React from 'react'
import styles from "./StandardTemplate.module.css";
import { Chip } from 'primereact/chip';
import Image from 'next/image'
function Technologies({ data }: any) {
    
  return (
    <>
    <div className={styles.subHeadings}>Here is what I have learnt over the years!</div>
    <Image src='.././assets/technologies.svg' width={500}
      height={500} alt="Technologies svg"/>
    <div className={styles.technologiesContainer}>
     {data.Technologies.map((tech : any)=>(
       <Chip className={styles.technologiesChip} label={tech} style={{backgroundColor: "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase() ,fontWeight: 'bold', color: 'white'}}>
       </Chip>
     ))}
    </div>
    </>
  )
}

export default Technologies