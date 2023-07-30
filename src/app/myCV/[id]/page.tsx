"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import WebCVConfiguration from "@/components/WebCVConfiguration/WebCVConfiguration";

function MyCV({ params }: { params: { id: string } }) {
  const [user, setUser] = useState({});
  useEffect(() => {getResumeData(params.id);},[])
  async function getResumeData(id: string) {
    const res = await axios.get(`/api/getData/${id}`).then((response) => {
      setUser(response.data);
    });

    // return res;
  }

  return (
    <>
      <WebCVConfiguration data={user}/>
    </>
  );
}

export default MyCV;
