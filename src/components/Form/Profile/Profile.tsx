import React from 'react'
import { Field, ErrorMessage } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';

function Profile({handleSubmit}:any) {
  return (
    <>
    <div className="p-field">
        <label htmlFor="username" >Full Name</label>
        <Field type="text" id="username" placeholder='eg: Ajai S S' name="personalDetails.username" as={InputText} />
      </div>
      <div className="p-field">
        <label htmlFor="adjectives">Phrases suitable to your work & you</label>
        <Field type="text" id="adjectives" placeholder='eg: Continuous learner' name="personalDetails.adjectives[0]" as={InputText} />
        <Field type="text" id="adjectives" placeholder='eg: Software Engineer' name="personalDetails.adjectives[1]" as={InputText} />
        <Field type="text" id="adjectives" placeholder='eg: Hardworking' name="personalDetails.adjectives[2]" as={InputText} />
      </div>
      
    </>
  )
}

export default Profile