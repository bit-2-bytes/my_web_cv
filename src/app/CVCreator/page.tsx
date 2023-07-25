"use client";
import { useRouter } from "next/navigation";
import styles from ".././page.module.css";
import cvstyles from "./CVCreator.module.css";
import axios from "axios";
import { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

function CVCreator() {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState("Profile Section");
  async function showWebCV() {
    // await axios.put('/api/updateData/',{
    //     "_id" : userId,
    //     "username" : userName
    // }).then(()=>{
    //   router.push('/myCV/'+userId);
    // })
  }

  return (
    <>
      <div className={styles.container}>
        <div className={cvstyles.forms}>
          <div className={cvstyles.menuContainer}>
            <div
              className={
                selectedMenu == "Profile Section"
                  ? cvstyles.menuIconSselected
                  : cvstyles.menuIcons
              }
              onClick={() => setSelectedMenu("Profile Section")}
            >
              <i className="pi pi-user" style={{ fontSize: "1.5rem" }}></i>
              Profile
            </div>
            <div
              className={
                selectedMenu == "Education Details"
                  ? cvstyles.menuIconSselected
                  : cvstyles.menuIcons
              }
              onClick={() => setSelectedMenu("Education Details")}
            >
              <i className="pi pi-book" style={{ fontSize: "1.5rem" }}></i>
              Education
            </div>
            <div
              className={
                selectedMenu == "Technical Skills"
                  ? cvstyles.menuIconSselected
                  : cvstyles.menuIcons
              }
              onClick={() => setSelectedMenu("Technical Skills")}
            >
              <i className="pi pi-wrench" style={{ fontSize: "1.5rem" }}></i>
              Skills
            </div>
            <div
              className={
                selectedMenu == "Proffesional Experience"
                  ? cvstyles.menuIconSselected
                  : cvstyles.menuIcons
              }
              onClick={() => setSelectedMenu("Proffesional Experience")}
            >
              <i className="pi pi-briefcase" style={{ fontSize: "1.5rem" }}></i>
              Experience
            </div>
            <div
              className={
                selectedMenu == "Trainings & Certifications"
                  ? cvstyles.menuIconSselected
                  : cvstyles.menuIcons
              }
              onClick={() => setSelectedMenu("Trainings & Certifications")}
            >
              <i className="pi pi-ticket" style={{ fontSize: "1.5rem" }}></i>
              Certificates
            </div>
            <div
              className={
                selectedMenu == "Awards & Glory"
                  ? cvstyles.menuIconSselected
                  : cvstyles.menuIcons
              }
              onClick={() => setSelectedMenu("Awards & Glory")}
            >
              <i className="pi pi-star" style={{ fontSize: "1.5rem" }}></i>
              Awards
            </div>
            <div
              className={
                selectedMenu == "Personal Projects"
                  ? cvstyles.menuIconSselected
                  : cvstyles.menuIcons
              }
              onClick={() => setSelectedMenu("Personal Projects")}
            >
              <i
                className="pi pi-credit-card"
                style={{ fontSize: "1.5rem" }}
              ></i>
              Projects
            </div>
          </div>
          <div className={cvstyles.formContainer}>
            <div className={cvstyles.formHeading}>{selectedMenu}</div>
            <div className={cvstyles.formFields}>
              {selectedMenu == "Profile Section" ? (
                <div>Profile Section
                   <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                </span>
                <InputText placeholder="Username" />
            </div>
                </div>
              ) : selectedMenu == "Education Details" ? (
                <div>Education Details</div>
              ) : (
                <div>This feature is still under development</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CVCreator;
