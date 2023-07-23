import React from 'react'
import styles from "./StandardTemplate.module.css";
import { Timeline } from 'primereact/timeline';
import { Fieldset } from 'primereact/fieldset';

function ProffesionalExperience({ data }: any) {
    const renderItem = (item:any) => {
        return (
         <Fieldset legend={item.role+"-"+item.organisation} className={styles.educationCard}>
            <legend className={styles.educationYear}>{item.year}</legend>
            {item["project details"].map((project:any,index:number)=>(
                <li key={index}>{project}</li>
            ))}
         </Fieldset>
        );
      };
  return (
    <>
    <div className={styles.subHeadings}>Over the years I have been working as!</div>
    <Timeline value={data["Professional Experience"]} align="alternate" content={(item) => renderItem(item)} />
    </>
  )
}

export default ProffesionalExperience