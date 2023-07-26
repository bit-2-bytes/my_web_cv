"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import WebCVConfiguration from "@/components/WebCVConfiguration/WebCVConfiguration";

function MyCV({ params }: { params: { id: string } }) {
  const [user, setUser] = useState({
    resumeConfig:{
     color: "blue",
     template: "standard"
    },
    personalDetails: {
      username: "Ajai S S",
      adjectives: ["UI developer" ,"Continuous Learner", "MERN Stack Developer"],
      photo : "",
      designation: "Systems Engineer",
      organisation: "Infosys Ltd",
      email: "ajaiss1713@gmail.com",
      phoneNumber: "+91 75989 91940",
      address: "Chennai, India",
      linkedin: "https://www.linkedin.com/in/ajai-s-s/",
      github: "https://github.com/bit-2-bytes",
      stackoverflow: "https://stackoverflow.com/users/18642316/ajai-s",
      leetcode: "https://leetcode.com/ajaiss1714/",
    },
    Technologies: ["React.js","Angular", "PrimeReact", "web development" ,"Next.js","biotechnology","react native","cloud native development", "tamil", "english"],
    Education:[{
      degree :"B.Tech",
      institution: "Anna University",
      year : "2017-2021",
      specialisation:"Mechanical",
      achievements :["university topper in 10 subjects","university topper in 10 subjects"]
    },{
      degree :"B.Tech",
      institution: "Anna University",
      year : "2017-2021",
      specialisation:"Mechanical",
      achievements :["university topper in 10 subjects","university topper in 10 subjects"]
    },],
    "Professional Experience":[{
      organisation: "Anna University",
      role:"student",
      year : "2017-2021",
      "project details" :["university topper in 10 subjects","university topper in 10 subjects"]
    },{
      organisation: "Anna University",
      role:"student",
      year : "2017-2021",
      "project details" :["university topper in 10 subjects","university topper in 10 subjects"]
    }],
    Award:[{
      name:"main award",
      description : "For being good",
      year:"2018"
    },
    {
      name:"main award",
      description : "For being good",
      year:"2018"
    },{
      name:"main award",
      description : "For being good",
      year:"2018"
    },
    {
      name:"main award",
      description : "For being good",
      year:"2018"
    }]
  });
  // useEffect(() => {getResumeData(params.id);},[])
  async function getResumeData(id: string) {
    const res = await axios.get(`/api/getData/${id}`).then((response) => {
      setUser(response.data);
    });

    return res;
  }

  return (
    <>
      <WebCVConfiguration data={user}/>
    </>
  );
}

export default MyCV;
