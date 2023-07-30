"use client";
import { useRouter } from "next/navigation";
import styles from ".././page.module.css";
import cvstyles from "./CVCreator.module.css";
import axios from "axios";
import { useState } from "react";
import { Formik, Form } from 'formik';
import Profile from "@/components/Form/Profile/Profile";
import Technologies from "@/components/Form/Technologies/Technologies";
import Education from "@/components/Form/Education/Education";
import Awards from "@/components/Form/Awards/Awards";
import Certificates from "@/components/Form/Certificates/Certificates";
import Experience from "@/components/Form/Experience/Experience";
import Projects from "@/components/Form/Projects/Projects";

function CVCreator() {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState("Profile Section");
  const handleSubmit = async (values: any) => {
     await axios.put('/api/updateData/', values)
     .then(()=>{
      router.push('/myCV/'+123);
    })
  };
  const initialValues = {
    "_id" : 123,
    resumeConfig: {
      color: 'blue',
      template: 'standard',
    },
    personalDetails: {
      username: '',
      adjectives: ['', '', ''],
      photo: '',
      designation: '',
      organisation: '',
      email: '',
      phoneNumber: '',
      address: '',
      linkedin: '',
      github: '',
      stackoverflow: '',
      leetcode: '',
    },
    Technologies: [''],
    Education: [
      {
        degree: '',
        institution: '',
        year: '',
        specialisation: '',
        achievements: '',
      },
      // Add more education data here
    ],
    "Professional Experience": [
      {
        organisation: '',
        role: '',
        year: '',
        "project details": '',
      },
      // Add more experience data here
    ],
    Award: [
      {
        name: '',
        description: '',
        year: '',
      },
      // Add more award data here
    ],Certificates: [
      {
        name: '',
        description: '',
        year: '',
      },
      // Add more award data here
    ],Projects: [
      {
        name: '',
        description: '',
        year: '',
      },
      // Add more award data here
    ]
  };
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
                  ? cvstyles.menuIconSelected
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
                  ? cvstyles.menuIconSelected
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
                  ? cvstyles.menuIconSelected
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
                  ? cvstyles.menuIconSelected
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
                  ? cvstyles.menuIconSelected
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
                  ? cvstyles.menuIconSelected
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
                  ? cvstyles.menuIconSelected
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
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ values, setFieldValue }) => (
            <Form>
              <div className={cvstyles.formContainer}>
                <div className={cvstyles.formHeading}>
                  {selectedMenu}
                  <div className="saveButtonContainer">
                    <button type="submit" className="saveButton">Save and Publish</button>
                  </div>
                </div>
                <div className={cvstyles.formFields}>



                  {selectedMenu == "Profile Section" ? (
                    <Profile setFieldValue={setFieldValue}/>
                  ) : selectedMenu == "Technical Skills" ? (
                    <Technologies values={values}/>
                  ) : selectedMenu == "Education Details" ? (
                    <Education values={values}/>
                  ) : selectedMenu == "Awards & Glory" ? (
                    <Awards values={values}/>
                  ) : selectedMenu == "Trainings & Certifications" ? (
                    <Certificates values={values}/>
                  ) :selectedMenu == "Proffesional Experience" ? (
                    <Experience values={values}/>
                  ) :selectedMenu == "Personal Projects" ? (
                    <Projects values={values}/>
                  ) :(
                    <div>This feature is still under development</div>
                  )}

                </div>
              </div>
              
            </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default CVCreator;
