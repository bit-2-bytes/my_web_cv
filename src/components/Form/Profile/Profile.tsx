import React,{useState} from 'react'
import { Field, ErrorMessage } from 'formik';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
        

function Profile({setFieldValue}:any) {
  const [imageUploadLabel, setimageUploadLabel] = useState('Choose Image');
  const handleImageChange = (event:any, setFieldValue:any) => {
    const file = event.target.files[0];
    setimageUploadLabel(file.name);

    // Read the selected image as a base64 string
    const reader = new FileReader();
    reader.onloadend = () => {
      setFieldValue('personalDetails.photo', reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
    <div className='p-sameline'>
    <div className="p-field">
        <label htmlFor="username" >Full Name</label>
        <Field type="text" id="username" placeholder='Eg: Ajai S S' name="personalDetails.username" as={InputText} />
      </div>
      <div className="p-field">
        <label htmlFor="organisation" >Organisation</label>
        <Field type="text" id="organisation" placeholder='Eg: XYZ Technologies' name="personalDetails.organisation" as={InputText} />
      </div>
      <div className="p-field">
        <label htmlFor="designation" >Designation</label>
        <Field type="text" id="designation" placeholder='Eg: Software Engineer' name="personalDetails.designation" as={InputText} />
      </div>

      <div className="p-field">
        <label htmlFor="adjectives">Phrases suitable to your work & you</label>
        <Field type="text" id="adjectives" placeholder='Eg: Continuous learner' name="personalDetails.adjectives[0]" as={InputText} />
        <Field type="text" id="adjectives" placeholder='Eg: Software Engineer' name="personalDetails.adjectives[1]" as={InputText} />
        <Field type="text" id="adjectives" placeholder='Eg: Hardworking' name="personalDetails.adjectives[2]" as={InputText} />
      </div>
      <div className="p-field p-sameline">
      <label htmlFor="image">Photo </label>
      <label className="upload-container">
              <span className="upload-label">{imageUploadLabel}</span>
            <input
              type="file"
              id="image"
              name="image"
              className="file-input"
              onChange={(event) => handleImageChange(event, setFieldValue)}
              accept="image/*"
            />
            </label> 
          </div>
      <div className="p-field p-sameline">
        <label htmlFor="address" >Address</label>
        <Field type="text" id="address" placeholder='Eg: Chennai, India' name="personalDetails.address" as={InputTextarea} />
      </div>
          <div className="p-field">
        <label htmlFor="email" >Email</label>
        <Field type="text" id="email" placeholder='Eg: abc123@gmail.com' name="personalDetails.email" as={InputText} />
      </div>
      <div className="p-field">
        <label htmlFor="phoneNumber" >Phone Number</label>
        <Field type="text" id="phoneNumber" placeholder='Eg: +91 12345 67890' name="personalDetails.phoneNumber" as={InputText} />
      </div>
      <div className="p-field">
        <label htmlFor="linkedin" >Linkedin</label>
        <Field type="text" id="linkedin" placeholder='Eg: https://www.linkedin.com/in/123/' name="personalDetails.linkedin" as={InputText} />
      </div>
      <div className="p-field">
        <label htmlFor="github" >Github</label>
        <Field type="text" id="github" placeholder='Eg: https://github.com/123' name="personalDetails.github" as={InputText} />
      </div>
      <div className="p-field">
        <label htmlFor="leetcode" >Leetcode</label>
        <Field type="text" id="leetcode" placeholder='Eg: https://leetcode.com/123/' name="personalDetails.leetcode" as={InputText} />
      </div>
      <div className="p-field">
        <label htmlFor="stackoverflow" >Stackoverflow</label>
        <Field type="text" id="stackoverflow" placeholder='Eg: https://stackoverflow.com/users/123' name="personalDetails.stackoverflow" as={InputText} />
      </div>
      </div>
    </>
  )
}

export default Profile