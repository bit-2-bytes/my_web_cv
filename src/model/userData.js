import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: { type: String, required: true, alias: 'customId' },
    resumeConfig: {
      color: { type: String, default: 'blue' },
      template: { type: String, default: 'standard' },
    },
    personalDetails: {
      username: { type: String, default: '' },
      adjectives: { type: [String], default: ['', '', ''] },
      photo: { type: String, default: '' },
      designation: { type: String, default: '' },
      organisation: { type: String, default: '' },
      email: { type: String, default: '' },
      phoneNumber: { type: String, default: '' },
      address: { type: String, default: '' },
      linkedin: { type: String, default: '' },
      github: { type: String, default: '' },
      stackoverflow: { type: String, default: '' },
      leetcode: { type: String, default: '' },
    },
    Technologies: { type: [String], default: [''] },
    Education: [
      {
        degree: { type: String, default: '' },
        institution: { type: String, default: '' },
        year: { type: String, default: '' },
        specialisation: { type: String, default: '' },
        achievements: { type: String, default: '' },
      },
    ],
    "Professional Experience": [
      {
        organisation: { type: String, default: '' },
        role: { type: String, default: '' },
        year: { type: String, default: '' },
        "project details": { type: String, default: '' },
      },
    ],
    Award: [
      {
        name: { type: String, default: '' },
        description: { type: String, default: '' },
        year: { type: String, default: '' },
      },
    ],
    Certificates: [
      {
        name: { type: String, default: '' },
        description: { type: String, default: '' },
        year: { type: String, default: '' },
      },
    ],
    Projects: [
      {
        name: { type: String, default: '' },
        description: { type: String, default: '' },
        year: { type: String, default: '' },
      },
    ],
  })

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;