"use client"
import {useRouter} from "next/navigation";
import styles from ".././page.module.css";
import cvstyles from "./CVCreator.module.css";
import axios from 'axios';
import { useState } from "react";
import { Button } from 'primereact/button';

function CVCreator() {
   
    const router = useRouter();

    async function showWebCV() {
        // await axios.put('/api/updateData/',{
        //     "_id" : userId,
        //     "username" : userName
        // }).then(()=>{
        //   router.push('/myCV/'+userId);
        // })
      };

  return (
    <>
    <div className={styles.container}>
      <div className={cvstyles.forms}>
    <div className={cvstyles.menuContainer}>
      <div className={cvstyles.menuIcons}>
       <i className="pi pi-user" style={{ fontSize: '1.5rem' }}></i>
       Profile
    </div>
    <div className={cvstyles.menuIcons}>
       <i className="pi pi-book" style={{ fontSize: '1.5rem' }}></i>
       Education
    </div>
    <div className={cvstyles.menuIcons}>
       <i className="pi pi-wrench" style={{ fontSize: '1.5rem' }}></i>
       Skills
    </div>
    <div className={cvstyles.menuIcons}>
       <i className="pi pi-briefcase" style={{ fontSize: '1.5rem' }}></i>
       Experience
    </div>
    <div className={cvstyles.menuIcons}>
       <i className="pi pi-ticket" style={{ fontSize: '1.5rem' }}></i>
       Certificates
    </div>
    <div className={cvstyles.menuIcons}>
       <i className="pi pi-star" style={{ fontSize: '1.5rem' }}></i>
       Awards
    </div>
    <div className={cvstyles.menuIcons}>
       <i className="pi pi-credit-card" style={{ fontSize: '1.5rem' }}></i>
       Projects
    </div>
    </div>
    <div className={cvstyles.formContainer}>
     
    </div>
    </div>
    </div>
    </>
  )
}

export default CVCreator