import React from 'react'
import styles from "./StandardTemplate.module.css";
import { Fieldset } from 'primereact/fieldset';


function Education({ data }: any) {
    console.log(data.Education);
    
  return (
    <>
    <div className={styles.subHeadings}>My Educational Summary</div>
    <div className={styles.educationContainer}>
    {data.Education.map((course: any)=>(
        <Fieldset legend={course.degree+"-"+course.institution + "("+course.year+")"} className={styles.educationCard} > 
        {course.achievements.map((achievement: any)=>(
            <li>{achievement}</li>
        ))}
        </Fieldset>
    ))}
    </div>
    </>
  )
}

export default Education